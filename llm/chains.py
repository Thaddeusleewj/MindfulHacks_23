
from langchain import LLMChain, OpenAI, PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains.openai_functions import (
    create_openai_fn_chain,
    create_structured_output_chain,
)

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



location_llm = ChatOpenAI(model_name="gpt-4-0613", temperature=1)
locationExtractorSchema = {
    "name": "locationExtractorSchema",
    "description": "Format and extract location of disruption from the given text",
    "type": "object",
    "properties": {
        "location": {
            "type": "string",
            "Description": "Location of Disruption Event.Location should include any landmarks,cities, countries and addresses, output an address searchable in googleMaps be as specific as possible."
        }
    },
    "required": ["location"]
}
locationExtractorPrompt = PromptTemplate(
    template = """Role:You are a Location Extractor,your goal is to extract the location of the disruption event from the given text. Location of Disruption Event. Examples: 1.French Pass, New Zealand 2.Xiamen Fujian Chain,3.Perry, Florida, USA. \n\nArticle Title:{articleTitle}\n{articleText}\nEnd of article\n\nTask: Extract Location of disruption event.Location should include any landmarks,cities, countries and addresses, output an address searchable in googleMaps be as specific as possible.Feedback:{feedback}""",
    input_variables=["articleTitle","articleText","feedback"]
)

locationExtractor = create_structured_output_chain(output_schema=locationExtractorSchema,llm = location_llm,prompt=locationExtractorPrompt)