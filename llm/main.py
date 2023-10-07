from langchain.chains import base

from datetime import datetime
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.memory import VectorStoreRetrieverMemory
from langchain.chains import ConversationChain
from langchain.prompts import PromptTemplate

import faiss

from langchain.docstore import InMemoryDocstore
from langchain.vectorstores import FAISS

from .memory import memory
class TherapistLLM:
    """Main wrapper for the Short-Term Memory LLM

    Short-term memory will be lost at each new creation of the TheripistLLM
    """

    def __init__(self,PINECONE_API_KEY, PINECONE_ENVIRONMENT,INDEX_NAME,SUPABASE_KEY,SUPABASE_URL):
        """Initialize the LLM with whatever other shit we need #TODO
        1. Create new short term memory buffer
        """
        self.memory = memory
        # self.memory.save_context({"input": "My problem is I very sad due to a breakup with my girlfriend"}, {"output": "Oh, I'm so sorry to hear that, that can be really tough. Want to talk about it? Im happy to lend an ear. Was it a mutual decision or a difficult break up?"})
        pass
    
    def get_checkUp_question(self) -> tuple[str,str]:
        """Returns a checkup questions based on Long-Term memory"""
        # TODO
        return ("This is the check up Question1", "This is check up Question2")
    
    
    def get_follow_up_checkUp_advice(self,checkUp_question:tuple[str,str], user_response:str) -> tuple[str,str]:
        """Returns a follow up checkup questions based on Long-Term memory"""
        # TODO
        return (f"This is the follow up check up Advice1 based on :checkup{checkUp_question}", f"This is follow up check up Advice2 and user_response-->{user_response}")
    
    def update_memory(self,llm_output, user_query):
        """Update the current memory with the conversations""" # May need to take note of who is responding first 

        self.memory.save_context({"input": user_query}, {"output": llm_output})


class mainLLM:
    """
    Main wrapper for the Long-Term Memory LLM
    """
    pass #TODO