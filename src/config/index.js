const mongoose = require("mongoose");
require("dotenv").config();
try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Connected to MongoDB");
} catch (e) {
  console.log(e.toString());
}
