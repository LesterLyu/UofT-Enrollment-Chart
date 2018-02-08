let rp = require('request-promise');

function getCourseInfo(courseCode, session) {
    let options = {
        uri: 'https://timetable.iit.artsci.utoronto.ca/api/20179/courses',
        qs: {
            code: courseCode,
            section: session //F or S or Y
        },
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
        },
        json: true // Automatically parses the JSON string in the response
    };

    return rp(options)
        .then(function (courseData) {
           return courseData;
        })
        .catch(function (err) {
            console.err("API call failed...")
            // API call failed...
        });
}

function getEnrollmentInfo(courseCode, session) {
    return getCourseInfo(courseCode, session).then((data) => {
        let result = [];
        const meetings = data[Object.keys(data)[0]].meetings;
        for(let section in meetings) {
            result.push({
                section: section,
                enrolment: parseInt(meetings[section].actualEnrolment),
                waitlist: parseInt(meetings[section].actualWaitlist),
                capacity: parseInt(meetings[section].enrollmentCapacity),
            });
        }
        return result;
    });
}

module.exports = {
    getEnrollmentInfo: getEnrollmentInfo
};
//
// getEnrollmentInfo('mat224', 'S').then((data) => {
//
//     console.log(data)
//
// });

