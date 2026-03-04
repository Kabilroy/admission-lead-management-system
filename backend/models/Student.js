const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    required: true
  },

  course: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["Applied", "Accepted", "Rejected"],
    default: "Applied"
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);