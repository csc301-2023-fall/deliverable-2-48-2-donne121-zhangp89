const Activity = require("../entities/Activity");
const Camp = require("../entities/Camp");

function getCampActivities(camp_id) {
    // For testing error handling of non-existant camp
    if (camp_id != "f307479d-262e-423a-a681-a043c2577b0b") {
        throw Error("camp_id does not exist");
    }
    return [
        new Activity(camp_id,
                    '1',
                    'Activity #1',
                    1),
        new Activity(camp_id,
                    '2',
                    'Activity #2',
                    1),
        new Activity(camp_id,
                    '3',
                    'Activity #3',
                    2),
        new Activity(camp_id,
                    '4',
                    'Activity #4',
                    2),
        new Activity(camp_id,
                    '5',
                    'Activity #5',
                    3),
        new Activity(camp_id,
                    '6',
                    'Activity #6',
                    1),
    ];
}

function submitSchedule(schedule) {
    return true;
}

function getCampById(camp_id) {
    // For testing error handling of non-existant camp
    if (camp_id != "f307479d-262e-423a-a681-a043c2577b0b") {
        throw Error("camp_id does not exist");
    }
    return new Camp(1, camp_id);
}

module.exports = {
    getCampActivities,
    submitSchedule,
    getCampById
}