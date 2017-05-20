const DueListing = require('../models').DueListing;

module.exports = {
  create(req, res) {
    return DueListing
      .create({
        debit: req.body.debit,
        interest: req.body.interest,
        loan_balance: req.body.loan_balance,
        last_payement_date: req.body.last_payement_date,
        due_date: req.body.due_date,
        complete: req.body.complete,
        profileId: req.params.profileId,
      })
      .then(dueListing => res.status(201).send(dueListing))
      .catch(error => res.status(400).send(error));
  }
}
