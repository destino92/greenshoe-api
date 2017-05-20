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
  },
  update(req, res) {
    return DueListing
      .find({
          where: {
            id: req.params.dueListingId,
            profileId: req.params.profileId,
          },
        })
      .then(dueListing => {
        if (!dueListing) {
          return res.status(404).send({
            message: 'dueListing Not Found',
          });
        }

        return dueListing
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedDueListing => res.status(200).send(updatedDueListing))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return DueListing
      .find({
          where: {
            id: req.params.dueListingId,
            profileId: req.params.profileId,
          },
        })
      .then(dueListing => {
        if (!dueListing) {
          return res.status(404).send({
            message: 'DueListing Not Found',
          });
        }

        return dueListing
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
}
