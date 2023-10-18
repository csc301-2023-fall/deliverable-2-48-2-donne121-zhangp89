const scheduleService = require('../controllers/scheduleController');

module.exports = (app) => {
    app.post('/schedule/generate/', (req, res) => {
        res.send(scheduleService.generateSchedule(req, res));
    });
};