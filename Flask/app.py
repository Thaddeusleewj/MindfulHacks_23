from flask import Flask, request
import openai

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'hello world'

#post request to use whisper api to transcript audio 
@app.route('/transcript', methods=['POST'])
def transcript():
    files = request.files
    file = files.get('file')
    with open("temp.mp3", "wb") as f:
        f.write(file)
        f.close()
        
    audio_file= open("temp.mp3", "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    
    return transcript


if __name__ == '__main__':
    app.run(debug=True)