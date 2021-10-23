const fetch = require('node-fetch');
const urlNews = "http://api.mediastack.com/v1/news?";
const accesKey = "2bb4b80023ee367e6dc6ac0120b09250";

exports.getNewsMediaStack = (req, res) => {
    var url = urlNews + "access_key=" + req.query.country;
    url += "&countries=" + req.query.country;
    url += "&keywords=" + req.query.keyword;
    fetch(url)
    .then((response) => {
        console.log(`Data: ${response}`);
        res.status(200).json({"message": "Petition successfully", "info": response});
        return 
    })
}