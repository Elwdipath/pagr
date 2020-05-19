const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  title: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  contactInfo: {
    slackUserID: { type: String },
    email: { type: String }
  }
  
},
{
  timestamps: true
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
