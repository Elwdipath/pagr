const axios = require('axios')
const usersURL = "https://slack.com/api/users.lookupByEmail?token="
const botURL = "https://slack.com/api/chat.postMessage"
require("dotenv").config();

module.exports = {

    getUsers: async (userEmail) => {
        console.log("user email is: " + userEmail)
        try {
            console.log("Retrieving Users")
            let users = await axios.get(usersURL + process.env.botToken + "&email=" + userEmail)
            // let users = usersURL + process.env.botToken + "&email=" + userEmail
            console.log("Get users " + users)
            // return users.data
        } catch (error) {
            console.error(error)
        }
    },

    postMessage: function (req, res) {
        let token = process.env.botToken
        let headers = {
            "Authorization": `Bearer ${token}`
        }

        let message = {
            channel: "#general",
            text: req.body.text,
        };

        axios.post(botURL, message, {
                headers: headers
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(`Error posting message to Slack API: ${error}`);
            });

        return
    }

}