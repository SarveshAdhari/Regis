const allJobs = (req, res) => {
    res.send('All Jobs')
}

const createJob = (req, res) => {
    res.send('Job Created!')
}

const applyJob = (req, res) => {
    res.send('Applied For Job!')
}

const deleteJob = (req, res) => {
    res.send('Job Deleted!')
}

const updateJob = (req, res) => {
    res.send('Job Updated!')
}

export { allJobs, createJob, applyJob, deleteJob, updateJob }