import React, { useState } from "react";
import './App.css';
import ReactPlayer from "react-player";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  
  const handleChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDownload = () => {
    fetch(videoUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'video.mp4');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <ReactPlayer
        playing loop controls width={"1080px"} height={"720px"}
        url={videoUrl}
      />
      <button onClick={handleDownload}>Download Video</button>
    </div>
  );
}

export default App;
