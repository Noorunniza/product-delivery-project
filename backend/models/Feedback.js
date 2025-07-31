const mongoose = require('mongoose'); // ✅ You missed this line!

const feedbackSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  complaints: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'In Review', 'Resolved', 'Rejected'],
    default: 'Pending'
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
