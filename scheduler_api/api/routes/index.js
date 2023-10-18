/**
 * Main router of the app.
 */
const express = require("express");
const router = express.Router();

const account_controller = require("../controllers/accountController");
const student_controller = require("../controllers/studentController");
const staff_controller = require("../controllers/staffController");
const counselor_controller = require("../controllers/counselorController");

/** Account Routes **/

// No home page, redirect to login page.
router.get("/", function (req, res) {
    res.redirect("/login");
});

// Login page
router.route("/login")
    .get(account_controller.loginPage)
    .post(account_controller.login);

// Signup page
router.route("/signup")
    .get(account_controller.signupPage)
    .post(account_controller.signup);

// Logout page
router.route("/logout")
    .post(account_controller.logout);

/** Profile Routes **/

// Default to show student profile page.
router.get("/profile", function (req, res) {
    res.redirect("/profile/student");
});

/// Student page ///
router.route("/profile/student")
    .get(student_controller.studentPage);

// Add a student profile
router.route("/profile/student/add")
    .post(student_controller.addStudent);

/// Counselor page ///
router.route("/profile/counselor")
    .get(counselor_controller.counselorPage);

/// Staff page ///
router.route("/profile/staff")
    .get(staff_controller.staffPage);

module.exports = router;