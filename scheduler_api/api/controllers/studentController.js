/**
 * Controller managing student profiles.
 */
var student = require("../entities/Student");

exports.studentPage = function (req, res) {
    student_strings = "";
    for (i = 0; i < student.students.length; i++) {
        student_strings += JSON.stringify(student.students[i]);
        student_strings += "<br>";
    }
    res.send("Current Student Profile:<br>" + student_strings);
}

exports.addStudent = function (req, res) {
    res.send("NOT IMPLEMENTED: Handle Add Student");
}