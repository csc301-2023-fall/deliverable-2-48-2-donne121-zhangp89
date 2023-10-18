/**
 * Controller managing staff profiles.
 */
var staff = require("../entities/Staff");

exports.staffPage = function (req, res) {
    staff_strings = "";
    for (i = 0; i < staff.staffs.length; i++) {
        staff_strings += JSON.stringify(staff.staffs[i]);
        staff_strings += "<br>";
    }
    res.send("Current Staff Profile:<br>" + staff_strings);
}

exports.addStaff = function (req, res) {
    res.send("NOT IMPLEMENTED: Handle Add Staff");
}