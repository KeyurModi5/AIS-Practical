const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // Ensure this is correctly set in your environment
});

exports.processText = async (inputText) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputText }],
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    throw new Error(error.message);
  }
};
