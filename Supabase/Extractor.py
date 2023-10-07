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
class SupabaseExtractor:
    """
    TLDR: "Fancy SELEC INTO statement for the supabase" (Need to migrate over)


    """
        
    # supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    def __init__(self, supabase_client:Client):
        self.supabase = supabase_client
        self.therpyColumns = ['id','created_at','title']


    def getLatestTherapyData(self) -> dict:
        therapy = self.supabase.table("therapy").select("*").order('created_at',desc=True).execute()
        therapy = therapy.data
        # Get the therapy dict with the latest created_at date
        therapy = therapy[0]
        return therapy