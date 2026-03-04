const express = require("express");
const router = express.Router();

const {
  uploadStudents,
  getAllStudents,
  updateStudentStatus,
  deleteStudent
} = require("../controllers/studentController");

router.post("/upload", uploadStudents);
router.get("/", getAllStudents);
router.put("/:id", updateStudentStatus);
router.delete("/:id", deleteStudent);

module.exports = router;