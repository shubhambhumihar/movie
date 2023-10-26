const mongoose = require("mongoose");

const databaseConnect = () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Error connecting to database");
  }
};

module.exports = databaseConnect;
