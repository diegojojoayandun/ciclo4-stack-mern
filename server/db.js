import { mongoose } from "mongoose";
import { MONGODB_URI } from "./config.js";
// Asyncronous Mongo Atlas Database connection
const dbConnection = (async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    //console.log(db.connection.client.s.options.srvHost)
    console.log(
      `Succesfully connected to ${db.connection.name} DB on Host ${db.connection.host}`
    );
  } catch (error) {
    console.error(error);
  }
})();

export default dbConnection;
