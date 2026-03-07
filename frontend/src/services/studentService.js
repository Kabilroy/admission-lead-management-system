import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getStudents = () => API.get("/students");

export const deleteStudent = (id) => API.delete(`/students/${id}`);

export const updateStudentStatus = (id, data) =>
  API.put(`/students/${id}`, data);