var jwt = require('jwt-simple');

/**
 * UserController.js
 *
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  getCurrentUser: function(req, res) {
    console.log(req.session.user);
    User.findOne(req.session.user.id)
      .exec(function(err, user) {
        return res.json(user);
      });
  },

  updateCurrentUser: function(req, res) {
    User.update(req.session.user.id, req.body)
      .exec(function(err, changes) {
        return res.json(changes);
      });
  }
});
