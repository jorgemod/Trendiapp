const controllerTwitter = require('../controllers/twitter.js');
const controllerOpenAI = require('../controllers/openai.js');

module.exports = (app) => {
    app.get('/searchTwit', controllerTwitter.searchTwit);
    app.get('/getkeywords', controllerOpenAI.getKeywords);
}