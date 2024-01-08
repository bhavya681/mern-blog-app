import express from 'express';
import cors from 'cors';
import connectDB from './database/db.js';
import auth from "./routes/auth.js";
import notes from "./routes/notes.js";
import "dotenv/config";

connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api/auth', auth);
app.use('/api/notes', notes);

app.listen(port, () => {

    console.log(`Server is working on http://localhost:${port}`);

});