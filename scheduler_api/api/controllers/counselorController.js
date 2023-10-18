/**
 * Controller managing counselor profiles.
 */
var counselor = require("../entities/Counselor");

exports.counselorPage = function (req, res) {
    counselor_strings = "";
    for (i = 0; i < counselor.counselors.length; i++) {
        counselor_strings += JSON.stringify(counselor.counselors[i]);
        counselor_strings += "<br>";
    }
    res.send("Current Counselor Profile:<br>" + counselor_strings);
}

exports.addCounselor = function (req, res) {
    res.send("NOT IMPLEMENTED: Handle Add Counselor");
}