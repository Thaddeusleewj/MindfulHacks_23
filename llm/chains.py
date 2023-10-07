
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
from langchain.chains import ConversationChain
from langchain.prompts import PromptTemplate
from .memory import memory

eventDetails_llm = OpenAI(model_name="gpt-4-0613", temperature=1)
eventDetails_schema = {
    "name": "eventDetails_schema",
    "description": "Format and extract the disruption event details from the given article",
    "type": "object",
    "properties": {
        "keyProblem":{
            "type": "string",
            "Description": "Key Problem the patient is facing"
        }
    },# TODO: Get actual disruption Event Date, and accurate loop
    "required": ["keyProblem"]
}

eventDetailsPrompt = PromptTemplate(
    template = """Role:You are a Theripst extracting key points from transcript of a therpy session, your goal is to extract key details such as Problems faced, Overall emotions.\n\nTranscript: {transcript}""",
    input_variables=["transcript"]
)

eventDetails = create_structured_output_chain(output_schema=eventDetails_schema,llm = eventDetails_llm,prompt=eventDetailsPrompt)



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