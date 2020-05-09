const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
