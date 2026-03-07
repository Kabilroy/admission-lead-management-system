import React, { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {

  const [stats, setStats] = useState({
    applied: 0,
    accepted: 0,
    rejected: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {

    const response = await getStudents();
    const students = response.data;

    let applied = 0;
    let accepted = 0;
    let rejected = 0;

    students.forEach((s) => {
      if (s.status === "Applied") applied++;
      if (s.status === "Accepted") accepted++;
      if (s.status === "Rejected") rejected++;
    });

    setStats({ applied, accepted, rejected });

  };

  const data = {
    labels: ["Applied", "Accepted", "Rejected"],
    datasets: [
      {
        label: "Admissions",
        data: [stats.applied, stats.accepted, stats.rejected],
        backgroundColor: ["orange", "green", "red"]
      }
    ]
  };

  return (
    <div style={{ width: "400px", margin: "20px" }}>
      <h2>Admissions Dashboard</h2>
      <Pie data={data} />
    </div>
  );
}

export default Dashboard;