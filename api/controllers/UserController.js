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
  },

  uploadImage: function (req, res) {
    req.file('image').upload({
      adapter: require('skipper-s3'),
      key: sails.config.keys.awsKey,
      secret: sails.config.keys.awsSecretKey,
      bucket: 'dating-site.test'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);

      var changes = {};
      var fileLocation = filesUploaded[0].extra.Location;

      User.findOne(req.session.user.id)
        .exec(function(err, user) {
          changes.images = user.images || [];
          if (changes.images.length >= 8) {
            return res.json(400, "User already has 8 images.");
          }

          changes.images.push(fileLocation);
          if (!user.defaultImage) {
            changes.defaultImage = fileLocation;
          }

          User.update(req.session.user.id, changes)
            .exec(function(err, changes) {
              return res.json(changes);
            });
        });
    });
  }
});
