const express = require("express");
const morgan = require("morgan");
// const path = require("path");
// const flash = require("connect-flash");
// const session = require("express-session");
// const { database } = require("./keys");
// const passport = require("passport");
const { mongoose } = require("./database");
const cors = require("cors");

// Initialize

const app = express();

// Settings

app.set("port", process.env.PORT || 5000);

// MIDDLEWARES

//app.use(flash()); // libreria usada enviar mensajes a las vistas

// Morgan is an HTTP request level Middleware. It is a great tool that logs the requests along with some other information depending upon its configuration and the preset used. It proves to be very helpful while debugging and also if you want to create Log files.
app.use(morgan("dev"));
// The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
// The express.urlencoded() is a built-in middleware in Express.js. The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.
app.use(express.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// Global variables

// Routes

// app.use(require("./routes"));
app.use(cors());
app.use("/users", require("./routes/user.route"));
app.use("/lawyers", require("./routes/lawyers.route"));

// Public

// Server Initialization

app.listen(app.get("port"), () => {
  console.log("Server listening on port ", app.get("port"));
});
