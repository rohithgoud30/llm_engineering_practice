import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:1234/v1",
  apiKey: "",
});

console.log("Loading Response...\n");

const message = "Hello, Llama3.2! This is my first ever message to you! Hi!";
const completion = await client.chat.completions.create({
  model: "llama-3.2-3b-instruct",
  messages: [{ role: "user", content: message }],
});

console.log("llama3.2 says:");

console.log(completion.choices[0].message.content);
