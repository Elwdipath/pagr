const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  email: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  
},
{
  timestamps: true
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
