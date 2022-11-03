const express = require("express");
const morgan = require("morgan");
// const path = require("path");
// const flash = require("connect-flash");
const session = require("express-session");
const MongoDBStore = require("express-mongodb-session")(session);
const { mongoURI, secretOrKey } = require("./keys");
const passport = require("passport");
const { mongoose } = require("./database");
const cors = require("cors");

// Initialize

const app = express();
require("./lib/passport");
const store = new MongoDBStore({
  uri: mongoURI,
  collection: "mySessions",
});

store.on("error", function (error) {
  console.log(error);
});

app.use(
  require("express-session")({
    secret: secretOrKey,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

// Settings

app.set("port", process.env.PORT || 5000);

// MIDDLEWARES

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Global variables

// Routes
app.use(cors());
app.use("/", require("./routes"));
app.use("/users", require("./routes/user.route"));
app.use("/users", require("./routes/user.route"));
app.use("/lawyers", require("./routes/lawyers.route"));
app.use("/authentication", require("./routes/authentication.route"));

// Public

// Server Initialization

app.listen(app.get("port"), () => {
  console.log("Server listening on port ", app.get("port"));
});
