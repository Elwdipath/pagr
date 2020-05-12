const db = require("../database/models");

// Defining methods for the scheduleController
module.exports = {
  findAll: function (req, res) {
    db.Schedule.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Schedule.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    //when the shift starts, ends, and who it's meant for.
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let schedulee = req.body.schedulee

    scheduleObj = {
      startDate: startDate,
      endDate: endDate
    }
    //newSchedule is defined as our schedule database object
    let newSchedule = new Schedule(scheduleObj)
    //now we save it to the database and log problems
    newSchedule.save(function(err, sched){
      if (err) {
        console.log(err)
      } else {
        console.log(sched._id)
        console.log(schedulee)

        //now we update who it's meant for and tack it on the user's db entry
        db.User.findOneAndUpdate(
          //Locate the user the schedule is for
          {email: schedulee},
          //push the refference id to this user's schedule array in the DB
          { $push: {schedules: sched._id } },
          //and that this is a new id we are adding
          {new: true}
          //then error log if something went wrong, or tell the browser everything is gucci
        ).exec(function(err){ 
          if (err) {
            console.log(err);
          } else {
            console.log(success)
            res.end(303)
          }
        })
      }
    })

  },
  update: function (req, res) {
    db.Schedule.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
