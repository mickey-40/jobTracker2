const jobs = require('../../models/jobs.model')

function getAllJobs(req,res){
  res.status(200).json(jobs);
}

module.exports = {
  getAllJobs,
}