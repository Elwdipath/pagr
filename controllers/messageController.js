const axios = require('axios')
const usersURL = "https://slack.com/api/users.lookupByEmail?token="
const botURL = "https://slack.com/api/chat.postMessage"
require("dotenv").config();
const usersController = require("./usersController")

module.exports = {

    getUsers: async (userEmail) => {
        console.log("user email is: " + userEmail)
        try {
            console.log("Retrieving Users")
            let users = await axios.get(usersURL + process.env.botToken + "&email=" + userEmail)
            // let users = usersURL + process.env.botToken + "&email=" + userEmail
            let slackID = JSON.stringify(users.data.user.id)
            console.log("Slack ID " + slackID)
            //add SlackID to user collection
            usersController.update(userEmail, slackID)
            // return users.data
        } catch (error) {
            console.error(error)
        }
    },

    postMessage: function (req, res) {
        console.log(req.body)
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
                res.json("Message Sent");
            })
            .catch((error) => {
                res.json(`Error posting message to Slack API: ${error}`);
            });
    }

}