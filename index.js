const core = require("@actions/core");
const { Configuration, OpenAIApi } = require("openai");

async function main() {
  try {
    const apiKey = core.getInput("openai-api-key");
    const prompt = core.getInput("prompt");

    const openai = new OpenAIApi(new Configuration({ apiKey }));
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.7, // You can set the temperature value here
    });

    const generatedText = completion.data.choices[0].text;
    console.log("Generated Text:", generatedText);

    // You can do further processing or actions with the generated text here
    
  } catch (error) {
    core.setFailed(`Error Message: ${error.stack}`);
  }
}

main();
