
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ["low", "moderate", "high"],
    default: "low",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
