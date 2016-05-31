/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({
  register: function(req, res) {
    var params = waterlock._utils.allParams(req),
      def = waterlock.Auth.definition,
      criteria = { },
      scopeKey = def.email !== undefined ? 'email' : 'username';

    // If there is only 1 chosen auth method just assume it
    if(waterlock._utils.countTopLevel(waterlock.methods) === 1){
      params.type = waterlock._utils.accessObjectLikeArray(0, waterlock.methods).authType;
    }

    if(typeof params.type === 'undefined'){
      return res.badRequest('You must specify a type parameter.');
    }

    var attr = {
      password: params.password
    };

    attr[scopeKey] = params[scopeKey];
    criteria[scopeKey] = attr[scopeKey];

    waterlock.engine.findAuth(criteria, function(err, user) {
      if (user)
        return res.badRequest("User already exists");
      else
        waterlock.engine.findOrCreateAuth(criteria, attr, function(err, user) {
          if (err) {
            return res.badRequest(err);
          }
          if(waterlock.methods.hasOwnProperty(params.type)){
            // call the login function of the correct auth type
            waterlock.methods[params.type].actions.login(req, res);
          }else{
            return res.badRequest('unknown/invalid authentication type');
          }
        });
    });
  }

});
