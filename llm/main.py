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

from .chains import conversation_with_summary
from .memory import memory
class TherapistLLM:
    """Main wrapper for the Short-Term Memory LLM

    Short-term memory will be lost at each new creation of the TheripistLLM
    """

    def __init__(self):
        """Initialize the LLM with whatever other shit we need #TODO
        1. Create new short term memory buffer
        """
        self.memory = memory
        self.memory.save_context({"input": "My problem is I very sad due to a breakup with my girlfriend"}, {"output": "Oh, I'm so sorry to hear that, that can be really tough. Want to talk about it? I’m happy to lend an ear. Was it a mutual decision or a difficult break up?"})
        pass

    def chat(self, query):
        """Chat with the LLM with what ever memory bullshit later """
        output = conversation_with_summary.predict(input = query)
        # Update the short-term-memory
        self.update_memory(llm_output= output,user_query=query)
        return output
    
    def get_checkUp_question(self) -> str:
        """Returns a checkup questions based on Long-Term memory"""
        # TODO
        return "This is the check up Question"
    
    def update_memory(self,llm_output, user_query):
        """Update the current memory with the conversations""" # May need to take note of who is responding first 

        self.memory.save_context({"input": user_query}, {"output": llm_output})
