const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs")

const userSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  slackUserID: {
    type: String,
    default: null
  },
  schedules: [{
    type: Schema.Types.ObjectId,
    ref: "Schedule"
  }]
});

userSchema.methods = {
  checkPassword: function (inputpassword) {
    return bcrypt.compareSync(inputpassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js ====NO PASSWORD PROVIDED====')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save')
    this.password = this.hashPassword(this.password)
    next()
  }

})

const User = mongoose.model("User", userSchema);

module.exports = User;