import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { getStudents } from "../services/studentService";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const total = students.length;
  const applied = students.filter(s => s.status === "Applied").length;
  const accepted = students.filter(s => s.status === "Accepted").length;
  const rejected = students.filter(s => s.status === "Rejected").length;

  const data = {
    labels: ["Applied", "Accepted", "Rejected"],
    datasets: [
      {
        label: "Admissions",
        data: [applied, accepted, rejected],
        backgroundColor: [
          "#f39c12",
          "#2ecc71",
          "#e74c3c"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1 style={{ marginBottom: "25px" }}>Admissions Dashboard</h1>

      {/* Stat Cards */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <div style={cardStyle("#3498db")}>
          <h3>Total</h3>
          <p>{total}</p>
        </div>

        <div style={cardStyle("#f39c12")}>
          <h3>Applied</h3>
          <p>{applied}</p>
        </div>

        <div style={cardStyle("#2ecc71")}>
          <h3>Accepted</h3>
          <p>{accepted}</p>
        </div>

        <div style={cardStyle("#e74c3c")}>
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>

      </div>

      {/* Chart */}

      <div
        style={{
          width: "420px",
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <Pie
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top"
              }
            }
          }}
        />

      </div>

    </div>
  );
}

const cardStyle = (color) => ({
  background: color,
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "130px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
});

export default Dashboard;