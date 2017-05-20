const profilesController = require('../controllers').profiles;
const dueListingsController = require('../controllers').dueListings;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/profiles', profilesController.create);
  app.get('/api/profiles', profilesController.list);
  app.post('/api/profiles/:profileId/debts', dueListingsController.create);
};
