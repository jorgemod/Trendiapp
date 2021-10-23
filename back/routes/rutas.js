const controllerTwitter = require('../controllers/twitter.js');
const controllerMediaStack = require('../controllers/mediaStack');

module.exports = (app) => {
    app.get('/searchTwit', controllerTwitter.searchTwit);
    app.get('/getNews', controllerMediaStack.getNewsMediaStack);
    app.get('/getNewsV2', controllerMediaStack.getNewsMediaStackV2);
}