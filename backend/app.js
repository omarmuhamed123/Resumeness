import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { signup } from './controllers/signup.controller.js';
import { login } from './controllers/login.controller.js';
import { auth_middleware } from './middlewares/auth.middleware.js';
import { resumeSave } from './controllers/save.controller.js';
import { history } from './controllers/history.controller.js';
dotenv.config({ path: './.env' });


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.URL)
    .then(() => { console.log('database is connected') })
    .catch(() => { console.log('error in connection') });

app.post('/signup', signup);
app.post('/login', login);
app.get('/check/', auth_middleware, (req, res) => { res.status(200).json({ status: 'success' }); });
app.post('/resume/save', auth_middleware, resumeSave);
app.get('/resume/history', auth_middleware, history);


app.listen(3003, () => { console.log('server started on 3003 port') });