const path = require('path')
const fetch = require('node-fetch');
var AWS = require('aws-sdk');
const { ComprehendClient, BatchDetectSentimentCommand, BatchDetectSentimentRequest } = require("@aws-sdk/client-comprehend");
var direccion = path.join(__dirname, "awsConfig.json")
AWS.config.loadFromPath(direccion);

var config = ({
    "apiVersion": "2017-11-27",
    "accessKeyId": "AKIA54WBYCE4NLRWHEQM",
    "secretAccessKey": "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",
    "region": "us-east-1"
  });

const client = new ComprehendClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: "AKIA54WBYCE4NLRWHEQM",
        secretAccessKey: "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"
    }
});


var comprehend = new AWS.Comprehend({
    apiVersion: '2017-11-27',
    region: 'us-east-1'
});

const fetchData = async (params) => {
    try {
        fetchObj = await comprehend.detectSentiment(params);
        obj = fetchObj.send();
        console.log("fetchObj", obj);
        // await comprehend.detectSentiment(params, function(err, data){
        //     if(err) console.log(err, err.stack);
        //     else {
        //         console.log("data.Sentiment", data.Sentiment);
        //         return data.Sentiment;
        //     } 
        // });
    } catch(err) {
        console.log("err.message", err.message);
    }
}

async function sentimientos (data) {
    const textList = data.map(twit => {return twit.text;})
    let response;

    // console.log("textList", textList)
    var params = {
        LanguageCode: "es",//en | es | fr | de | it | pt | ar | hi | ja | ko | zh | zh-TW, /* required */
        TextList: textList
    };
    
    try {
        const command = new BatchDetectSentimentCommand(params);
        response = await client.send(command);
        // console.log("response", response);
    } catch(err) {
        console.log("err.message", err);
    }
    return response.ResultList;
}

async function feelings (data) {
    const textList = data.map(news => {return news.description;})
    let response;

    // console.log("textList", textList)
    var params = {
        LanguageCode: "es",//en | es | fr | de | it | pt | ar | hi | ja | ko | zh | zh-TW, /* required */
        TextList: textList
    };
    
    try {
        const command = new BatchDetectSentimentCommand(params);
        response = await client.send(command);
        // console.log("response", response);
    } catch(err) {
        console.log("err.message", err);
    }
    return response.ResultList;
}


module.exports = {sentimientos, feelings};