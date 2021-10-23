const fetch = require('node-fetch');
//const http = require('https');
const axios = require('axios');
const { reset } = require('nodemon');
const urlNews = "http://api.mediastack.com/v1/news?";
const accessKey = "2bb4b80023ee367e6dc6ac0120b09250";

exports.getNewsMediaStack = async (req, res) => {
    var url = urlNews + "access_key=" + accessKey;
    url += "&countries=" + req.query.countries;
    url += "&keywords=" + req.query.keywords;
    let maxNumberNewsItems = 10;
    let response = await fetch(url);
    if(response.status >= 200 && response.status <= 299)
    {
        let newsBBVA = await response.json();
        let arrayInfoNews = [];
        newsBBVA.data.map( (news) => {
            arrayInfoNews.push({"author": news.author, "description": news.description, "url": news.url});
        });
        res.status(response.status).json({"message": "Petition successfully", "info": arrayInfoNews});
    }
    else if(response.status >= 400 && response.status <= 499)
        res.status(response.status).json({"message": "Bad request"});
    else
        res.status(response.status).json({"message": "Error server"});
}