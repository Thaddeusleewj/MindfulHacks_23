import pandas as pd
from dotenv import load_dotenv
import os

import postgrest
from postgrest.exceptions import APIError
from tqdm import tqdm
# Supabase
from supabase import create_client, Client
# # Load variables from the .env file
# load_dotenv('.env')
# # Access the variables
# SUPABASE_URL = os.getenv("SUPABASE_URL")
# SUPABASE_KEY = os.getenv("SUPABASE_KEY")

import logging
logger = logging.getLogger(__name__)
class SupabaseInsertor:
    """
    TLDR: "Fancy INSERT INTO statement for the supabase" (Need to migrate over)

    Methods:
        * addDisruptionEvent(self, DisruptionEvent: dict)
        * addEventDataRelation
    """
        
    # supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    def __init__(self, supabase_client:Client):
        self.supabase = supabase_client

    def addTherapyData(self,Therapy_transcript:str):
        therapy_dict = self._formatTherapyDict(Therapy_transcript)
        try:
            data, count = self._insertArticleData(therapy_dict)
            id = self._extractArticleId(data)
            therapy_dict['id'] = id
            # print('therapy_dict: ', therapy_dict)
            logger.info(f'Successfully Inserted Therapy: {therapy_dict}')
            return therapy_dict
        except postgrest.exceptions.APIError as e:
            return self._handleInsertError(e, therapy_dict, "Article")
        
    def addCatchUpData(self,catchUp_dict:dict):
        """Example CatchUp_dict:
        {
        "input":"theripistLLM input",
        "output":"user output",
        }
        """
        try:
            data, count = self._insertCatchUpData(catchUp_dict)
            id = self._extractArticleId(data)
            catchUp_dict['id'] = id
            # print('therapy_dict: ', therapy_dict)
            logger.info(f'Successfully Inserted catchUp: {catchUp_dict}')
            return catchUp_dict
        except postgrest.exceptions.APIError as e:
            return self._handleInsertError(e, catchUp_dict, "Article")
        
    def _formatTherapyDict(self,Therapy: str) -> dict:
        return {
            "text": Therapy,
        }
    def _insertArticleData(self, article_dict:dict):
        return self.supabase.table("therapy").insert(article_dict).execute()
    
    def _insertCatchUpData(self, catchUp_dict:dict):
        return self.supabase.table("checkup").insert(catchUp_dict).execute()

    def _extractArticleId(self,data):
        return data[1][0]['id']

    def _handleInsertError(self,error, article_dict:dict,table):
        # logger.error(f'Error inserting into Supabase: {error}')
        # logger.error(error.code, error.message, error.details)
        if error.code == '23505':
            logger.error(f'Article with URL {article_dict["Url"]} already exists in the database.')
            existing_data = self.supabase.table(table).select('*').eq('Url', article_dict['Url']).execute()
            return existing_data.data[0]
        else:
            logger.error(f'Unexpected error: {error}')