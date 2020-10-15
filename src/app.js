require("./config/index");
require("dotenv").config();
const logger = require("winston");

const addTrackToDB = require("./scrapper"),
  cron = require("node-cron");

//run the first time server starts
addTrackToDB();

//runs every day at 4pm
cron.schedule("0 16 * * *", function () {
  addTrackToDB();
  logger.log("AddedTrack ran at " + Date.now());
});
