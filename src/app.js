require("./config/index");
require("dotenv").config();
const logger = require("./logger/index");

const addTrackToDB = require("./scrapper"),
  cron = require("node-cron");

//run the first time server starts
addTrackToDB();

//runs every day at 3pm
cron.schedule("0 15 * * *", function () {
  addTrackToDB();
  logger.log("AddedTrack ran at " + Date.now());
});
