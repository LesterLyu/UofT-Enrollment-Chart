const mongo = require('mongoose');
const Schema = mongo.Schema;


let courseSchema = new Schema({
    data: [{
        section: String,
        enrolment: Number,
        waitlist: Number,
        capacity: Number,
    }]
});

module.exports = mongo.model('Course',courseSchema);