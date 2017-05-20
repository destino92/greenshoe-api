const Profile = require('../models').Profile;

module.exports = {
  create(req, res) {
    return Profile
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        national_id: req.body.national_id,
        mobile_number: req.body.mobile_number,
      })
      .then(profile => res.status(201).send(profile))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Profile
      .all()
      .then(profiles => res.status(200).send(profiles))
      .catch(error => res.status(400).send(error));
  },
};
