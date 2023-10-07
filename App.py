import os
import openai
import pinecone
import itertools

from dotenv import load_dotenv
from flask import Flask, request, render_template, redirect, url_for, session
# from embedstore import load_embedding
import sys
load_dotenv()

app = Flask(__name__)
# Get the absolute path to the directory containing this script (app.py)
current_directory = os.path.dirname(os.path.realpath(__file__))

# Add the 'modules' directory to sys.path
LLM_directory = os.path.join(current_directory, 'llm')
Supabase_directory = os.path.join(current_directory, 'Supabase')
# utils_directory = os.path.join(current_directory, 'utils')
sys.path.append(Supabase_directory)
sys.path.append(LLM_directory)
# sys.path.append(utils_directory)

# app.secret_key = os.getenv("SECRET_KEY")
openai.api_key = os.getenv("OPENAI_API_KEY")
from llm.main import TherapistLLM

current_therapistLLM = TherapistLLM()

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
@app.route('/checkup', methods=['GET'])
def get_checkup_question():
    checkup_question = current_therapistLLM.get_checkUp_question()
    session['checkup_question'] = checkup_question
    return checkup_question

if __name__ == '__main__':
   app.run()