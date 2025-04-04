const mongoose = require('mongoose');

// Define the schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Task title is required
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'], // Only these values allowed
    default: 'pending'
  },
  dueDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set to current date
  }
});

// Create and export model
module.exports = mongoose.model('Task', taskSchema);
