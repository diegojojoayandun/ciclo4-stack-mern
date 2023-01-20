// const session = require("express-session");
// const MongoDBStore = require("express-mongodb-session")(session);
// const { mongoURI, secretOrKey } = require("./keys");
// const passport = require("passport");
// const { mongoose } = require("./database");
// const responseTime = require("response-time");

// // Initialize

// const app = express();
// require("./lib/passport");
// const store = new MongoDBStore({
//   uri: mongoURI,
//   collection: "mySessions",
// });

// store.on("error", function (error) {
//   console.log(error);
// });

// app.use(
//   require("express-session")({
//     secret: secretOrKey,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
//     },
//     store: store,
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// // MIDDLEWARES
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(responseTime());

import express from "express";
import { PORT } from "./config.js";
import dbConnection from "./db.js";
import responseTime from "response-time";
import session from "express-session";
import { createRoles } from "./libs/initSetup.js";
import morgan from "morgan";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
// import curriculumRoutes from "./routes/curriculums.routes.js";

// Initialize
const app = express();
createRoles();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(responseTime());

// Routes
app.use(cors());
app.use(userRoutes);
app.use(authRoutes);

// Server Initialization
app.listen(PORT);
console.log(`Servidor escuchando en el puerto ${PORT}`);
