const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests usters route
// @access  Private

router.get('/test', (req, res) => res.json({
    msg: 'users route works!'
}));

module.exports = router;