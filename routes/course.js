const express = require('express');
const router = express.Router();
const iit = require('../controller/iit-api');

/* GET users listing. */
router.get('/:course/:session', function(req, res, next) {
    const course = req.params.course;
    const session = req.params.session;
    iit.getEnrollmentInfo(course, session).then((data) => {
        res.status(200).json(data);
    });
});

module.exports = router;
