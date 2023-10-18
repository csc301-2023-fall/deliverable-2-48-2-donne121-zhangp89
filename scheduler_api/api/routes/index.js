/**
 * Main router of the app.
 */
const express = require("express");
const router = express.Router();

const account_controller = require("../controllers/accountController");

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



module.exports = router;