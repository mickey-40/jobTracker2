const express = require('express');

const {
  getAllJobs,
} = require('./jobs.controller');

const jobsRouter = express.Router();

jobsRouter.get('/jobs', getAllJobs);

module.exports = jobsRouter;