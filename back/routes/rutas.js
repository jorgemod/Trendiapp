const controllerTwitter = require('../controllers/twitter.js');

module.exports = (app) => {
    app.get('/searchTwit', controllerTwitter.searchTwit);

}