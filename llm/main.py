from langchain.chains import base

from datetime import datetime
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.memory import VectorStoreRetrieverMemory
from langchain.chains import ConversationChain
from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain.chains import LLMChain
# import faiss

from langchain.docstore import InMemoryDocstore
from .chains import transcriptExtractorChain, transcriptExtractorChainGPT4,checkUpChain, checkUpChainGPT4,followUpCheckUpAdviceChain,followUpCheckUpAdviceChainGPT4
from .memory import memory
# Add the 'modules' directory to sys.path 
import sys
import os
current_directory = os.path.dirname(os.path.realpath(__file__))
Supabase_directory = os.path.join(current_directory, 'Supabase')
sys.path.append(Supabase_directory)
from Supabase.Extractor import SupabaseExtractor
from Supabase.Insertor import SupabaseInsertor
from supabase import create_client, Client

import jsonschema
from jsonschema import ValidationError
from typing import Any, Callable, Dict, List, Optional, Sequence, Tuple, Union


def extract_json_schema(llm_kwargs: dict) -> Optional[dict]:
    """Extracts the JSON schema from the LLM kwargs. To construct Validator objects."""
    # Check if the 'functions' key exists in the data
    if 'functions' in llm_kwargs:
        # Iterate through the functions
        for function in llm_kwargs['functions']:
            # Check if the 'parameters' key exists in the function
            if 'parameters' in function:
                # Check if the 'type' key is 'object' in the parameters
                if function['parameters'].get('type') == 'object':
                    # Return the properties and required fields of the object schema
                    properties = function['parameters'].get('properties', {})
                    required = function['parameters'].get('required', [])
                    return {'type': 'object', 'properties': properties, 'required': required}
    
    # If schema extraction fails, return None
    return None

class outputValidator:
    """
    Validates json output of any llmchain, given that it's created with the create_structured_output_chain function
    Gives Feedback to the LLMChain to improve the output
    """
    @staticmethod
    def _getOutputSchemaMapping(LLMChain:LLMChain) -> dict:
        """Returns the supposed output schema of the given LLMChain 
        
        Example llm_kwargs:
        {'functions': [{'name': 'output_formatter',
   'description': 'Output formatter. Should always be used to format your response to the user.',
   'parameters': {'name': 'binary_classifier_article_schema',
    'description': 'Binary Classifier Schema for Article, 0 for False and 1 for True',
    'type': 'object',
    'properties': {'isDisruptionEvent': {'type': 'boolean'},
     'Reason': {'type': 'string'}},
    'required': ['isDisruptionEvent', 'Reason']}}],
    'function_call': {'name': 'output_formatter'}}
    """
        output_schema = LLMChain.llm_kwargs
        # Create a dictionary mapping with Key as Key and Value as type
        validator_json_schema = extract_json_schema(output_schema)
        return validator_json_schema
        
    @classmethod
    def validate(cls, LLMChain:LLMChain, output: dict) -> Tuple[bool, str]:
        """Validates the output of the given llmchain
        Args:
            JSON_SCHEMA (dict): The JSON Schema to validate
            output (dict): The output of the LLMChain
        Returns:
            Tuple[bool, str]: A tuple containing a boolean and a string. 
            The boolean is True if the output is valid according to the schema, False if not. 
            The string is the reason for the boolean value. If the boolean is True, the string will be empty.
            The string might be used to give feedback to LLMChain to improve the output.
        """
        # Check if the output is a dict
        if not isinstance(output,dict):
            return (False,"The output is not JSON object (dict)")
        # Get the output schema mapping
        JSON_SCHEMA = cls._getOutputSchemaMapping(LLMChain)
        
        try:
            # Create a validator based on the JSON_SCHEMA
            validator = jsonschema.Draft7Validator(JSON_SCHEMA)
            
            # Check if the output is valid
            errors = list(validator.iter_errors(output))
            
            if errors:
                error_messages = [str(error) for error in errors]
                return (False, ", ".join(error_messages))  # Output is invalid, return the validation error messages
            else:
                return (True, "")  # Output is valid
        except Exception as e:
            return (False, str(e))  # Handle any other exceptions that may occur
class TherapistLLM:
    """Main wrapper for the Short-Term Memory LLM

    Short-term memory will be lost at each new creation of the TheripistLLM
    """

    def __init__(self,SUPABASE_KEY,SUPABASE_URL):
        """Initialize the LLM with whatever other shit we need #TODO
        1. Create new short term memory buffer
        """
        self.memory = memory
        self.transcriptExtractorChain: LLMChain = transcriptExtractorChain
        self.transcriptExtractorChainGPT4:LLMChain = transcriptExtractorChainGPT4
        self.checkUpChain: LLMChain = checkUpChain
        self.checkUpChainGPT4: LLMChain = checkUpChainGPT4
        self.follow_up_checkUp_advice: LLMChain = followUpCheckUpAdviceChain 
        self.followUpCheckUpAdviceChainGPT4 :LLMChain = followUpCheckUpAdviceChainGPT4

        # Supabase Init
        supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        self.supabaseExtractor: SupabaseExtractor = SupabaseExtractor(supabase_client=supabase_client)
        self.supabaseInsertor : SupabaseInsertor = SupabaseInsertor(supabase_client=supabase_client)

        self.latestJournalPrompt1 = None
        self.latestJournalPrompt2 = None
        pass

    def _transcriptExtractorChain(self,latest_transcript:dict):
        """Adds validation before parsing out"""
        try:
            results = self.transcriptExtractorChain.run(transcript = latest_transcript['text'])

            # Validate the output
            validation_results = outputValidator.validate(self.transcriptExtractorChain, results)
            if not validation_results[0]:
                print(f'_transcriptExtractorChain Validation Error, Re-Running with feedback: {validation_results[1]}')

                # Re-run the chain with the feedback
                results = self.transcriptExtractorChainGPT4.run(transcript = latest_transcript['text'], feedback = validation_results[1])

        except Exception as e:
            raise Exception(f"Error: transcriptExtractorChain Failed -> {e}") from e
        
        return results
    
    def _checkUpChain(self,MainProblems:str,AnythingRelevant:str):
        """Adds validation before parsing out"""
        try:
            results = self.checkUpChain.run(MainProblems = MainProblems,AnythingRelevant = AnythingRelevant)

            # Validate the output
            validation_results = outputValidator.validate(self.checkUpChain, results)
            if not validation_results[0]:
                print(f'_checkUpChain Validation Error, Re-Running with feedback: {validation_results[1]}')

                # Re-run the chain with the feedback
                results = self.checkUpChainGPT4.run(MainProblems = MainProblems,AnythingRelevant = AnythingRelevant, feedback = validation_results[1])

        except Exception as e:
            raise Exception(f"Error: checkUpChain Failed -> {e}") from e
        
        return results
    
    def _followUpCheckUpAdviceChain(self,MainProblems:str,AnythingRelevant:str,Question1:str,Question2:str,PatientJournalReflection:str):
        """Adds validation before parsing out"""
        try:
            results = self.follow_up_checkUp_advice.run(MainProblems = MainProblems,AnythingRelevant = AnythingRelevant,Question1 = Question1,Question2 = Question2,PatientJournalReflection = PatientJournalReflection)

            # Validate the output
            validation_results = outputValidator.validate(self.follow_up_checkUp_advice, results)
            print('validation_results follow up: ', validation_results)
            if not validation_results[0]:
                print(f'_followUpCheckUpAdviceChain Validation Error, Re-Running with feedback: {validation_results[1]}')

                # Re-run the chain with the feedback
                results = self.followUpCheckUpAdviceChainGPT4.run(MainProblems = MainProblems,AnythingRelevant = AnythingRelevant,Question1 = Question1,Question2 = Question2,PatientJournalReflection = PatientJournalReflection, feedback = validation_results[1])

        except Exception as e:
            raise Exception(f"Error: followUpCheckUpAdviceChain Failed -> {e}") from e
        
        return results
    
    def get_checkUp_question(self) -> list([str,str]):
        """Returns a checkup questions based on Long-Term memory"""
        # TODO 
        print('Extracting from Supabase')
        latest_transcript = self.supabaseExtractor.getLatestTherapyData()
        # get the key points from the transcript 
        key_points_dict = self._transcriptExtractorChain(latest_transcript = latest_transcript)
        print('key_points_dict: ', key_points_dict)

        # Run the checkup chain
        checkUp_questions = self._checkUpChain(MainProblems = key_points_dict["MainProblems"],AnythingRelevant = key_points_dict["AnythingRelevant"])
        print('checkUp_questions: ', checkUp_questions)

        # Update the latest journal prompt
        self.updateLatestJournalPrompt(JournalPrompt1 = checkUp_questions["Question1"],JournalPrompt2 = checkUp_questions["Question2"])

        return ["This is the check up Question1", "This is check up Question2"]
    
    def updateLatestJournalPrompt(self,JournalPrompt1:str,JournalPrompt2:str):
        self.latestJournalPrompt1 = JournalPrompt1
        self.latestJournalPrompt2 = JournalPrompt2

    def get_follow_up_checkUp_advice(self, user_response:str) -> list([str,str]):
        """Returns a follow up checkup questions based on Long-Term memory"""

        # Check if latestJournalPrompt1 and latestJournalPrompt2 is None
        if self.latestJournalPrompt1 is None or self.latestJournalPrompt2 is None:
            raise ValueError("latestJournalPrompt1 and latestJournalPrompt2 is None, please run get_checkUp_question() first")
        
        # Run the follow up checkup chain
        follow_up_checkUp_advice = self._followUpCheckUpAdviceChain(MainProblems = "MainProblems",AnythingRelevant = "AnythingRelevant",Question1 = self.latestJournalPrompt1,Question2 = self.latestJournalPrompt2,PatientJournalReflection = user_response)
        print('follow_up_checkUp_advice: ', follow_up_checkUp_advice)

        # Update the latest journal prompt
        # self.updateLatestJournalPrompt(JournalPrompt1 = follow_up_checkUp_advice["Advice1"],JournalPrompt2 = follow_up_checkUp_advice["Advice2"])


        # TODO 
        #(f"This is the follow up check up Advice1 based on :checkup{checkUp_question}", f"This is follow up check up Advice2 and user_response-->{user_response}")
        return follow_up_checkUp_advice
    
    def update_memory(self,llm_output, user_query):
        """Update the current memory with the conversations""" # May need to take note of who is responding first 

        self.memory.save_context({"input": user_query}, {"output": llm_output})


class mainLLM:
    """
    Main wrapper for the Long-Term Memory LLM
    """
    pass #TODO
