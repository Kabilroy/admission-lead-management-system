import React from "react";
import Papa from "papaparse";
import axios from "axios";

function CSVUpload() {

  const handleFileUpload = (event) => {

    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function(results) {

        try {

          await axios.post(
            "http://localhost:5000/api/students/upload",
            results.data
          );

          alert("Students uploaded successfully!");

        } catch (error) {
          console.error(error);
        }

      }
    });

  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Upload Students CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />

    </div>
  );
}

export default CSVUpload;