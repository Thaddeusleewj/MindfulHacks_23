
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains.openai_functions import (
    create_openai_fn_chain,
    create_structured_output_chain,
)

from datetime import datetime
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.memory import VectorStoreRetrieverMemory
from langchain.chains import ConversationChain,RetrievalQA
from langchain.prompts import PromptTemplate
from .memory import memory
import pinecone
from langchain.vectorstores import Pinecone

checkUp_llm = OpenAI(model_name="gpt-4-0613", temperature=1)
checkUpDetails_schema = {
    "name": "eventDetails_schema",
    "description": "Generates, a questions to checkup on the patient's mental health based on the patients history",
    "type": "object",
    "properties": {
        "Question1":{
            "type": "string",
            "Description": "Perfect checkup Question based on:\n1.History of context of the patient\nGood Journaling Prompt Examples"
        },
        "Question2":{
            "type": "string",
            "Description": "Another relevant checkup question, very different froom Question1"
        },
    },# TODO: Get actual disruption Event Date, and accurate loop
    "required": ["Question1","Question2"]
}

eventDetailsPrompt = PromptTemplate(
    template = """Role:You are a Theripst checking up on a patient daily, your goal is get the patient to Journel their thoughts/feelings by asking them relevant questions. Craft the perfect checkup Question based on:\n1.History of context of the patient\n2. Example questions of a good Journaling Prompt.\n\nGood Journaling Prompt Examples:\n1.What are my goals and objectives related to this problem or challenge?\n2.How can I prioritize and organize my thoughts and ideas to effectively solve this problem or challenge?\n3.What did I do today that I am proud of?\n\n Patient History Context:\n{patient_info}""",
    input_variables=["patient_info"]
)

eventDetails = create_structured_output_chain(output_schema=checkUpDetails_schema,llm = checkUp_llm,prompt=eventDetailsPrompt)



llm = OpenAI(temperature=0) # Can be any valid LLM
_DEFAULT_TEMPLATE = """The following is a friendly conversation between a human and a theripist. The theripist is meant to help the human with her mental health issues in a positive manner, giving inspirational advice with relevance to the context of the human. If the theripist does not know the answer to a question, it truthfully says it does not know.

Relevant pieces of previous conversation:
{history}

(You do not need to use these pieces of information if not relevant)

Current conversation:
Human: {input}
AI:"""
PROMPT = PromptTemplate(
    input_variables=["history", "input"], template=_DEFAULT_TEMPLATE
)
conversation_with_summary = ConversationChain(
    llm=llm, 
    prompt=PROMPT,
    # We set a very low max_token_limit for the purposes of testing.
    memory=memory,
    verbose=True
)


class QAretrivalChain:
    """Special QA chain pinecone"""

    @classmethod
    def init(cls, PINECONE_API_KEY, PINECONE_ENVIRONMENT,INDEX_NAME):
        """Initialize the QAretrivalChain with the pinecone API key and environment"""
                # Create LLMChain
        try:
            vectorstore = cls._initPinecone(PINECONE_API_KEY, PINECONE_ENVIRONMENT,INDEX_NAME)
            qa_chain = RetrievalQA.from_chain_type(
            llm= OpenAI(model_name="gpt-3.5-turbo-0613", temperature=0),
            chain_type="refine",
            retriever=vectorstore.as_retriever(),
            verbose=True,
            )
        except Exception as e:
            raise Exception(f"Error creating qa_chain: {e}")
        

        return qa_chain
    
    @classmethod
    def _initPinecone(cls,PINECONE_API_KEY, PINECONE_ENVIRONMENT,INDEX_NAME):
        """Returns a pinecone vectorstore"""

        # initialize pinecone
        pinecone.init(
            api_key=PINECONE_API_KEY,  # find at app.pinecone.io
            environment=PINECONE_ENVIRONMENT,  # next to api key in console
        )

        index_name = INDEX_NAME

        embeddings = OpenAIEmbeddings(model='text-embedding-ada-002')

        # List all indexes information
        index_description = pinecone.describe_index(index_name)
        print('index_description: ', index_description)

        index = pinecone.Index(index_name) 
        index_stats_response = index.describe_index_stats()
        print('index_stats_response: ', index_stats_response)

        # Create vectorstore
        try:
            vectorstore = Pinecone(index, embeddings.embed_query, "text")
            print('vectorstore created succesfully')
            return vectorstore
        except Exception as e:
            raise Exception(f"Error creating vectorstore: {e}")