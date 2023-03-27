import express from 'express'

import { allJobs, createJob, applyJob, deleteJob, updateJob } from '../controllers/jobController.js'

const router = express.Router()

router.route('/alljobs').get(allJobs)
router.route('/createJob').post(createJob)
router.route('/deleteJob').delete(deleteJob)
router.route('/updateJob').patch(updateJob)
router.route('/applyJob').post(applyJob)

export default router