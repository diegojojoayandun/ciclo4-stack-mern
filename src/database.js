const { mongoose } = require("mongoose");

const { mongoURI: URI } = require("./keys");

// Asyncronous Mongo Atlas Database connection
(async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true });
    console.log("MongoDB successfully connected");
  } catch (error) {
    console.error(error);
  }
})();

module.exports = mongoose;
