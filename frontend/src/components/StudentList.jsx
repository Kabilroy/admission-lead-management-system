import React, { useEffect, useState } from "react";
import {
  getStudents,
  deleteStudent,
  updateStudentStatus
} from "../services/studentService";

function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const handleStatusChange = async (id, status) => {
    await updateStudentStatus(id, { status });
    fetchStudents();
  };

  // EXPORT CSV FUNCTION
const exportCSV = () => {

  const headers = ["name", "email", "phone", "course", "status"];

  const rows = students.map(student =>
    headers.map(header => student[header]).join(",")
  );

  const csvContent =
    headers.join(",") + "\n" + rows.join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "students.csv";
  link.click();
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students</h2>

      {/* DOWNLOAD BUTTON */}
      <button onClick={exportCSV} style={{ marginBottom: "10px" }}>
        Download Students CSV
      </button>
      
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>

              <td>
                <select
                  value={student.status}
                  onChange={(e) =>
                    handleStatusChange(student._id, e.target.value)
                  }
                >
                  <option value="Applied">Applied</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>

              <td>
                <button onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentList;