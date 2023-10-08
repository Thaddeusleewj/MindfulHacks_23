import os
import openai
import pineconeManager
import itertools
from supabase import create_client, Client
from dotenv import load_dotenv
from flask import Flask, request, render_template, redirect, url_for, session
# from embedstore import load_embedding
import sys
from flask_cors import CORS, cross_origin

load_dotenv()

app = Flask(__name__)
CORS(app)
# Get the absolute path to the directory containing this script (app.py)
current_directory = os.path.dirname(os.path.realpath(__file__))

# Add the 'modules' directory to sys.path
LLM_directory = os.path.join(current_directory, 'llm')
Supabase_directory = os.path.join(current_directory, 'Supabase')
# utils_directory = os.path.join(current_directory, 'utils')
sys.path.append(Supabase_directory)
sys.path.append(LLM_directory)

from llm.main import TherapistLLM
from Supabase.Insertor import SupabaseInsertor

# sys.path.append(utils_directory)
SUPABASE_URL=os.getenv("SUPABASE_URL")
SUPABASE_KEY=os.getenv("SUPABASE_KEY")
PINECONE_API_KEY=os.getenv("PINECONE_API_KEY")
PINECONE_INDEX_NAME=os.getenv("PINECONE_INDEX_NAME")
PINECONE_ENVIRONMENT=os.getenv("PINECONE_ENVIRONMENT")

client = create_client(SUPABASE_URL, SUPABASE_KEY)

supabaseInsertor = SupabaseInsertor(client)
# app.secret_key = os.getenv("SECRET_KEY")
openai.api_key = os.getenv("OPENAI_API_KEY")

therapistLLM = TherapistLLM(SUPABASE_URL=SUPABASE_URL, SUPABASE_KEY=SUPABASE_KEY)


# current_therapistLLM = TherapistLLM()

# @app.route('/', methods=['GET', 'POST'])
# def run_bot():
#     if request.method == 'POST':
#         query = request.form.get('query')
#         result = "WOOOOOOOOOOOOOOOOOOOOO#TODO"
#         session['result'] = result
#         session['query'] = query
#         return redirect(url_for('run_bot'))
#     return render_template('index.html', query=session.get("query"), result=session.get("result"))

# # Add one more route for chat langchain LLM here
# @app.route('/chat', methods=['GET', 'POST'])
# def run_chat():
#     if request.method == 'POST':
#         query = request.form.get('query')
#         result = TherapistLLM.chat(query)
#         session['result'] = result
#         session['query'] = query
#         return redirect(url_for('run_chat'))
#     return render_template('chat.html', query=session.get("query"), result=session.get("result"))

# # delete Memory from TheripistLLM
# @app.route('/deleteMemory', methods=['GET', 'POST'])
# def delete_memory():
#     if request.method == 'POST':
#         # Just reinitialize the LLM, clearing the memory
#         current_therapistLLM = TherapistLLM()
#         return redirect(url_for('run_chat'))
#     return render_template('chat.html', query=session.get("query"), result=session.get("result"))

# Generate a checkup question

@app.route('/')
def hello_world():
    return 'hello world'

@app.route('/transcript', methods=['POST'])
def transcript():
    print(request)
    files = request.files
    file = files.get('file')
    print(file)
    file.save("./temp.mp3")
        
    with open("./temp.mp3", "rb") as f:
        print("Processing...")
        transcript = openai.Audio.transcribe("whisper-1", f)
        f.close()

    os.remove("./temp.mp3")
    response = supabaseInsertor.addTherapyData(transcript)
    print(response)
    return response

@app.route('/get_checkUp_question', methods=['GET'])
def get_checkup_question():
    """Returns json with Keys Question1 and Question2, {
        "Question1": "xxxxxxxxxx",
        "Question2": "xxxxxxxxxx",
        "MainProblems": "xxxxxxxxxx
        "AnythingRelevant": "xxxxxxxxxx"
    }"""
    checkup_question = therapistLLM.get_checkUp_question()
    print('checkup_question: ', checkup_question)

    return checkup_question

@app.route('/supabasePush', methods=['POST'])
def supabasePush():
    # Gets the user response from the frontend
    PatientJournalReflection = request.form.get('PatientJournalReflection')

    catchUp_dict = {
        "input": f"{therapistLLM.latestJournalPrompt1}\{therapistLLM.latestJournalPrompt2}",
        "output": f"{PatientJournalReflection}"
    }
    # Insert the shit to supabase
    supabaseInsertor.addCatchUpData(catchUp_dict)


@app.route('/obtain_follow_up_checkUp_advice', methods=['POST'])
def get_follow_up_checkUp_advice():
    """Returns json with Keys Question1 and Question2, {
            "Advice1": xxxxxxx,
            "Advice2": xxxxxxx,
            "Question1":xxxxxxx,
            "Question2":xxxxxxx,
            "PatientJournalReflection": xxxxxx,
        }"""
    # Takes in two inputs, checkUp_question, and user_response --> returns follow_up_checkUp_advice
    PatientJournalReflection = request.form.get('PatientJournalReflection')
    follow_up_checkUp_advice = therapistLLM.get_follow_up_checkUp_advice(user_response = PatientJournalReflection)


    return follow_up_checkUp_advice

# Test supabase insert
@app.route('/insert', methods=['GET'])
def insertText():
    sample_text = "FUCK THIS SHITTTTT"
    print(request)
    response = supabaseInsertor.addTherapyData(sample_text)
    print(response)

    return response


if __name__ == '__main__':
   app.run()
