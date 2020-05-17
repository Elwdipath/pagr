const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  email: { type: String, required: true},
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  
},
{
  timestamps: true
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
