import { React, useState, useRef, useEffect } from "react";
import { supabase } from "../API/Auth";

import { MicOff, Mic } from "lucide-react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState({
    file: "",
    confirmation: "",
  });
  const audioRecorderRef = useRef(null);
  const pulseBtnRef = useRef(null);

  const recorderControls = useAudioRecorder();

  const toggleRecording = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording);
    if (isRecording) {
      recorderControls.stopRecording();
    } else {
      recorderControls.startRecording();
    }
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    console.log(typeof blob.type);
  };

  const handleAudioUpload = (e) => {
    let file = e.target.file[0];

    // Check for the format of the file
    if (file){
      console.log('The file is', file);
    }
  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="hidden">
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          // downloadOnSavePress={true}
          downloadFileExtension="mp3"
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          ref={audioRecorderRef}
          recorderControls={recorderControls}
        ></AudioRecorder>
      </div>

      <div className="flex w-full justify-center items-center">
        <div
          className="aspect-square h-96 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-full flex justify-center items-center cursor-pointer"
          id="pulse"
          onClick={toggleRecording}
          ref={pulseBtnRef}
        >
          {!isRecording ? <MicOff size={100} /> : <Mic size={100} />}
        </div>
      </div>
      <br />
    </div>
  );
}
