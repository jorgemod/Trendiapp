const controllerTwitter = require('../controllers/twitter.js');
const controllerOpenAI = require('../controllers/openai.js');
const controllerMediaStack = require('../controllers/mediaStack');

module.exports = (app) => {
    app.get('/searchTwit', controllerTwitter.searchTwit);
    app.get('/getkeywords', controllerOpenAI.getKeywords);
    app.get('/getNews', controllerMediaStack.getNewsMediaStack);
}