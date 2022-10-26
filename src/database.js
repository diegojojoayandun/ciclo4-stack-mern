const mongoose = require("mongoose");

const { mongoURI: URI } = require("./keys");

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

  printAlert  = ()=>{
    alert("asasas");
  };

module.exports = mongoose;

