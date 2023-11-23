import React from "react";
import "./fileUpload.scss";
import axios from "axios";

export default function FileUpload() {
  const [file, setFile] = React.useState(null);
  function handleFileInputChange(event) {
    setFile(event.target.files[0]);
  }
  const handleFileUpload = (event) => {
    event.preventDefault();
    axios.post({
      url: `http://localhost:8089/upload_image`,
      data: {
        image: file,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileInputChange} />
        <button
          style={{ background: "#2a3447", color: "white", padding: "10px" }}
          type="submit"
        >
          upload
        </button>
      </form>
    </div>
  );
}
