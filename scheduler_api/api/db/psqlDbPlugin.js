const Activity = require("../entities/Activity");

function getCampActivities(camp_id) {
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

module.exports = {
    getCampActivities,
    submitSchedule
}