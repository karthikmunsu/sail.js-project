/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	user: function(req, res) {
		return req.send("hi there.")
	},
	bye: function(req, res) {
		return res.redirect("http://www.google.com");
	}
};

