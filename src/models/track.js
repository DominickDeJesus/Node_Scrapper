const mongoose = require("mongoose"),
  moment = require("moment");

const trackSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

trackSchema.methods.toJSON = function () {
  const track = this;
  const trackObject = track.toObject();
  if (trackObject.dueDate) {
    trackObject.dueDate = moment(trackObject.dueDate).format("YYYY-MM-DD");
  }
  return trackObject;
};

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
