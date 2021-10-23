const path = require('path')

var AWS = require('aws-sdk');
var direccion = path.join(__dirname, "awsConfig.json")
AWS.config.loadFromPath(direccion);

var comprehend = new AWS.Comprehend({
    apiVersion: '2017-11-27',
    region: 'us-east-1'
});

const sentimientos = ()=>{
    
    var params = {
        LanguageCode: 'es',
        Text: 'chinga tu madre alexander'
    };
    
    comprehend.detectSentiment(params, function(err, data){
        if(err) console.log(err, err.stack);
        else console.log(data);
    });
}


module.exports = sentimientos;