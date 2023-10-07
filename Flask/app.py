from flask import Flask, request
import openai
import os
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv()
openai.api_key = os.environ.get("OPENAI_API_KEY")

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
    print(transcript)
    os.remove("./temp.mp3")
    
    return transcript

if __name__ == '__main__':
    app.run(debug=True)