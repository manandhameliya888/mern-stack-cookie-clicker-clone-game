const express = require('express');
const { calculateReward } = require('../jobs/logic.js');
const User = require('../models/user.js');

const router = express.Router();

// Define your routes
router.post('/click', async (req, res) => {
    try {
        const { username } = req.body;
        const reward = calculateReward();

        // Fetch or create the user
        let user = await User.findOne({ username });
        if (!user) {
            user = new User({ username, totalScore: 0, prizes: 0 });
        }

        // Update user stats
        user.totalScore += reward.points;
        user.prizes += reward.isPrize ? 1 : 0;
        await user.save();

        res.json({
            message: reward.isPrize
                ? `You won a prize! Total points: ${user.totalScore}`
                : `You earned ${reward.points} points. Total points: ${user.totalScore}`,
            user,
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
