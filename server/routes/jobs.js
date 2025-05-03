const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authMiddleware = require('../middleware/auth');

// Get all jobs (with optional search)
router.get('/', async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
        ],
      };
    }
    const jobs = await Job.find(query).populate('postedBy', 'username');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's jobs
router.get('/my-jobs', authMiddleware, async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.user.id }).populate('postedBy', 'username');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Post a job
router.post('/', authMiddleware, async (req, res) => {
  const { title, company, location, description } = req.body;
  try {
    const job = new Job({
      title,
      company,
      location,
      description,
      postedBy: req.user.id,
    });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a job
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await job.remove();
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;