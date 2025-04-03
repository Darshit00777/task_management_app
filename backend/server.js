require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI); // Debugging line

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


