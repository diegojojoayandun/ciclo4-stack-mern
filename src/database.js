const { mongoose } = require("mongoose");

const { mongoURI: URI } = require("./keys");

(async () => {
  try {
    const db = await mongoose.connect(URI, { useNewUrlParser: true });
    console.log("MongoDB successfully connected");
  } catch (error) {
    console.error(error);
  }
})();

module.exports = mongoose;
