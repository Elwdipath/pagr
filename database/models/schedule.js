const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  title: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  firstName: { type: String },
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