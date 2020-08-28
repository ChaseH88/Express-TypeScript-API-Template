require("dotenv").config({ path: './config.env' }); // environment variables

//============= STORE API =============
import express from "express";
const app = express();
import path from "path";
import morgan from 'morgan';
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import cors from 'cors';
const _PORT = process.env.PORT || 6000;

// Middlewares
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(fileupload());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
import route from "./routes/route";

// Request Logger
process.env.NODE_ENV === 'development' && (() => 
  app.use(morgan('dev'))
)();

// Use Routes
app.use(`/api`, route);

// Listener
const server = app.listen(_PORT, () => {
  console.log(`
===============================
Server has started on port ${_PORT}
Mode: ${process.env.NODE_ENV}
===============================
  `);
});


process.on('unhandledRejection', (err: { message: string }, promise: Promise<any>): void => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});