const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const jobsRouter = require('./routes/jobs/jobs.router');

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(jobsRouter);

app.get('/', (req,res)=> {
    console.log(
        "Hello"
    )
})

module.exports = app;