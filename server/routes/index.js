const profilesController = require('../controllers').profiles;
const dueListingsController = require('../controllers').dueListings;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/profiles', profilesController.create);
  app.get('/api/profiles', profilesController.list);
  app.get('/api/profiles/:profileId', profilesController.retrieve);
  app.put('/api/profiles/:profileId', profilesController.update);
  app.delete('/api/profiles/:profileId', profilesController.destroy);

  app.post('/api/profiles/:profileId/items', dueListingsController.create);
  app.put('/api/profiles/:profileId/items/:dueListingId', dueListingsController.update);
  app.delete('/api/profiles/:profileId/items/:dueListingId', dueListingsController.destroy);

  // For any other request method on todo items, return "Method Not Allowed"
  app.all('/api/profiles/:profileId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};
