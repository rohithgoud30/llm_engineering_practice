import OpenAI from "openai";
import "dotenv/config";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.log("No API key was found");
} else if (!apiKey.startsWith("616b")) {
  console.log(
    "An API key was found, but it doesn't start '616b'; please check you're using the right key"
  );
} else if (apiKey.trim() !== apiKey) {
  console.log(
    "An API key was found, but it looks like it might have space or tab characters at the start or end"
  );
} else {
  console.log("API key found and looks good so far!");
}

const client = new OpenAI({
  baseURL: "https://api.z.ai/api/coding/paas/v4",
  apiKey,
});

console.log("Loading Response...\n");

const message = "Hello, GLM! This is my first ever message to you! Hi!";
const completion = await client.chat.completions.create({
  model: "GLM-4.6",
  messages: [{ role: "user", content: message }],
});

console.log("GLM-4.6 says:");

console.log(completion.choices[0].message.content);
