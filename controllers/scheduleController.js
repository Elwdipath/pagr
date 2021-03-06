const db = require("../database/models");
const Schedule = require("../database/models/schedule")

// Defining methods for the scheduleController
module.exports = {
  findAll: function (req, res) {
    db.Schedule.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => {
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Schedule.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    //when the shift starts, ends, and who it's meant for.
    let date = req.body.date
    let start = req.body.startTime
    let end = req.body.endTime
    let email = req.body.email
    let slackUserID = req.body.slackUserID || "Not Provided"
    let fullName = req.body.fullName || ""

    scheduleObj = {
      title: fullName + " On-Call",
      start: date+"T"+start,
      end: date+"T"+end,
      contactInfo: {
        slackUserID: slackUserID,
        email: email
      }
    }
    //newSchedule is defined as our schedule database object
    let newSchedule = new Schedule(scheduleObj)
    
    console.log(newSchedule)
    //now we save it to the database and log problems
    newSchedule.save(function(err, schedule){
      if (err) {
        console.log(err)
      } else {
        console.log(schedule._id)
        console.log(email)

        //now we update who it's meant for and tack it on the user's db entry
        db.User.findOneAndUpdate(
          //Locate the user the schedule is for
          {email: email},
          //push the refference id to this user's schedule array in the DB
          { $push: {schedules: schedule._id } },
          //and that this is a new id we are adding
          {new: true}
          //then error log if something went wrong, or tell the browser everything is gucci
        )
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
      }
    })

  },
  update: function (req, res) {
    db.Schedule.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Schedule.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};