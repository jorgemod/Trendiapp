var AWS = require('aws-sdk');
const path = require('path')
var direccion = path.join(__dirname, "awsConfig.json")
AWS.config.loadFromPath(direccion);


const sentimientos = (text) => {
    var comprehend = new AWS.Comprehend({
        apiVersion: '2017-11-27',
        region: 'us-east-1'
    });
    var params = {
        LanguageCode: 'es',
        Text: text
    };
    
    comprehend.detectSentiment(params, function(err, data){
        if(err) 
            console.log(err, err.stack);
        else 
            console.log(data);
    });
}

module.exports = sentimientos;