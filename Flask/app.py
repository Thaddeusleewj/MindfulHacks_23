from flask import Flask, request
import openai
import os

app = Flask(__name__)

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
    # with open("temp.mp3", "wb") as f:
    #     f.write(file)
    #     f.close()
        
    with open("./temp.mp3", "rb") as f:
        print("Processing...")
        # transcript = openai.Audio.transcribe("whisper-1", f)
        f.close()
    transcript = "HI"
    os.remove("./temp.mp3")
    return transcript

if __name__ == '__main__':
    app.run(debug=True)