/**
 * MatchController.js
 *
 * @module      :: Controller
 * @description :: Provides functionality
 *                 for matching with other users.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {
  getMatches: function(req, res) {
    User.find()
      .where({'id': {'!': req.session.user.id}})
      .exec(function(err, users) {
        if (err) {
          return res.json(500, "Error fetching users.");
        }
        return res.json(users);
      });
  }
};
