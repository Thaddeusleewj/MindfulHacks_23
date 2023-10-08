import React, { useState, useRef, useEffect } from "react";
import { FileAudio } from "lucide-react";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      // Use selectedFile for your file upload logic (e.g., send it to a server)
      console.log("Selected File:", typeof selectedFile.type);

      let formData = new FormData();
      let audioFile = new File([selectedFile], "audio.mp3", {
        type: selectedFile.type,
      });
      formData.append("file", audioFile, "audio.mp3");
      axios
        .post(process.env.VITE_DEV + "/transcript", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("No file selected.");
    }
  }, [selectedFile]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        accept=".webm"
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <button
        type="button"
        onClick={handleButtonClick}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <div className="flex items-center gap-3 text-xl cursor-pointer">
          <FileAudio />
          <p>Upload Audio File</p>
        </div>
      </button>
    </>
  );
};

export default Upload;
