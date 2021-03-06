var Twit = require('twit');
var { getKeywords, generatePhrase } = require('./openai.js');
var { sentimientos } = require('../awsComprehend.js');

var T = new Twit({
  consumer_key:         'BExYU0PjOCDom40t2324RxDCt',
  consumer_secret:      '493E6O061c4a1NPeHC10gDNFMSQc4ArHlER5ziVh2WrPZiWlcY',
  access_token:         '1449198594725056516-2bBX3rYTPYFI1CF60D8EZzAZhTVzPw',
  access_token_secret:  'zDRnudVhmUvHnU1EOlUV6xWHglmPXiOUO13EUs9K6WT0p',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
let sentimiento;

const fetchData = async (res, data) => {
  try {
    sentimiento = await sentimientos(data.statuses[0].text);
    console.log("sentimiento", sentimiento);
    return sentimiento;
  } catch (err) {
    console.log("err.message", err.message);
  }
}

exports.searchTwit = (req, res) => {
  T.get('search/tweets', { q: req.query.word + ' since:2020-03-01', lang:'es', value: 'country_code: ' + req.query.place_code, lang: 'es', count: 25 }, async function(err, data, response) {
    // console.log("req.params", req.query.word);
    // console.log("data", data);

    const result = await sentimientos(data.statuses);
    // console.log("result", result);
    let keywords = await Promise.all(
      data.statuses.map(async twit => {
          return await getKeywords(twit.text);
      })
    );
    // console.log("keywords", keywords);

    const phrase = await generatePhrase("BBVA");
    // console.log("phrase", phrase);

    res.send(data.statuses.map( (twit, index) => {
      return {"twit": twit.text, "place": req.query.place_code, "sentimiento": result[index].Sentiment, "keywords": keywords[index].choices[0].text, "phrase": phrase.choices[0].text}
    }));
  });
}