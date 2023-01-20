import * as dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 4000;
export const SECRET_OR_KEY = process.env.SECRET_OR_KEY;
