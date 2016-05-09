module.exports = {
  login: function(req, res) {
    res.json(LoginService.login(req.body.username, req.body.password));
  }
};
