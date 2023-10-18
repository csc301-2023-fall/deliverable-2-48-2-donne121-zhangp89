/**
 * Class representing a student profile.
 */
module.exports = class User {
    /**
     * Create a new user object.
     * 
     * @param {string} userID - The unique ID.
     * @param {string}} user_name
     * @param {string} password 
     */
    constructor (userID, user_name, password) {
        this.userID = userID;
        this.user_name = user_name;
        this.password = password;
    }
}