const axios = require('axios')
const url = "https://slack.com/api/users.identity?token="
require("dotenv").config();

module.exports = {

getUsers: async () => {
    try {
        console.log("Retrieving Users")
      let users = await axios.get(url + process.env.userToken)
      console.log(users.data.user.name)
      return users.data
    } 
     catch (error) {
      console.error(error)
    }
  },
  
//  countUsers: async () => {
//      console.log("returning users")
//     const users = await getUsers
//     console.log(users.data)
//     return users.data
//   }
  
  
}