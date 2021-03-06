const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = "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";

const openai = new OpenAI(OPENAI_API_KEY);

const getKeywords = async (data) => {
    // console.log("data", data);
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: 'Text: ' + data + ' \n\nKeywords:',
        maxTokens: 90,
        temperature: 0.3,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0.8,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n']
    });

    // console.log(gptResponse.data);
    return gptResponse.data;
};

const generatePhrase = async data => {
    // console.log("data", data);
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: 'Considero que una posible oportunidad para BBVA se presenta si consideramos: ',
        maxTokens: 200,
        temperature: 0.5,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0.8,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ['\n']
    });

    // console.log(gptResponse.data);
    return gptResponse.data;
}

module.exports = { getKeywords, generatePhrase};