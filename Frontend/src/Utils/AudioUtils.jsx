import React from "react";
import axios from "axios";

export function addAudioElement(blob) {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);

  let formData = new FormData();
  let audioFile = new File([blob], "audio.mp3", { type: blob.type });
  formData.append("file", audioFile, "audio.mp3");

  return axios
    .post("http://127.0.0.1:5000/transcript", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}