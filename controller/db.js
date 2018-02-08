const iit = require('iit-api');
const Course = require('../models/course');

module.exports = {
    update: (course, session) => {
        iit.getEnrollmentInfo(course, session).then((data) => {
            let newCourse = new Course(data);

        })
    }
};