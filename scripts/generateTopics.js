require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const generationConfig = {
  maxOutputTokens: 8192,
  temperature: 0,
};
const safetySettings = [
  { category: "HARM_CATEGORY_UNSPECIFIED", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_DEROGATORY", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_TOXICITY", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_VIOLENCE", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_SEXUAL", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_MEDICAL", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_DANGEROUS", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
  { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
];

async function generateTopics() {
  const model = genAI.getGenerativeModel(
    { model: "gemini-1.5-pro" },
    generationConfig,
    safetySettings
  );

  const prompt = `Generate a JSON array representing a C++ curriculum for memory management. 
  Each object in the array should have the following structure:
  {
    "category": "string (lowercase, hyphen-separated)",
    "title": "string",
    "chapters": ["string", "string", ...] 
  }
  Make sure the generated JSON is valid. Do not include any markdown formatting.`; // Emphasize no markdown

  const result = await model.generateContent(prompt);
  const response = await result.response;
  let generatedJSON = response.text();

  // Remove markdown code block formatting if present
  generatedJSON = generatedJSON.replace(/```json\n?|\n?```/g, "");

  try {
    // Validate and parse the generated JSON
    const topics = JSON.parse(generatedJSON);

    // Write the validated JSON to topics.json
    fs.writeFileSync("public/topics.json", JSON.stringify(topics, null, 2));
    console.log("topics.json generated successfully!");
  } catch (error) {
    console.error("Error parsing generated JSON:", error);
    console.error("Generated JSON:", generatedJSON); // Log the raw output for debugging
  }
}

generateTopics();
