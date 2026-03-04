const Student = require("../models/Student");


// Upload Students
exports.uploadStudents = async (req, res) => {
  try {

    const students = req.body;
    const savedStudents = [];

    for (let student of students) {

      const existingStudent = await Student.findOne({ email: student.email });

      if (!existingStudent) {

        const newStudent = new Student(student);
        await newStudent.save();
        savedStudents.push(newStudent);

      }

    }

    res.status(201).json({
      message: "Students uploaded successfully",
      data: savedStudents
    });

  } catch (error) {

    res.status(500).json({
      message: "Error uploading students",
      error: error.message
    });

  }
};



// Get All Students
exports.getAllStudents = async (req, res) => {
  try {

    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching students",
      error: error.message
    });

  }
};



// Update Student Status
exports.updateStudentStatus = async (req, res) => {
  try {

    const { id } = req.params;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Student updated successfully",
      data: updatedStudent
    });

  } catch (error) {

    res.status(500).json({
      message: "Error updating student",
      error: error.message
    });

  }
};
exports.deleteStudent = async (req, res) => {
  try {

    const { id } = req.params;

    await Student.findByIdAndDelete(id);

    res.status(200).json({
      message: "Student deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Error deleting student",
      error: error.message
    });

  }
};