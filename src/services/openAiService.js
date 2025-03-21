const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

exports.processText = async (inputText) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputText }],
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    throw new Error(error.message);
  }
};
