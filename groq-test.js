import { generateText } from 'ai';
import { createGroq } from '@ai-sdk/groq';
import * as dotenv from 'dotenv';

// 1. Load environment variables from .env file
dotenv.config();

// 2. Initialize Groq. It automatically uses the GROQ_API_KEY from the environment.
const groq = createGroq(); 

async function runGroqTest() {
  try {
    console.log("--- Sending Request to Groq ---");
    
    // Check if the API Key is loaded
    if (!process.env.GROQ_API_KEY) {
        console.error("ERROR: GROQ_API_KEY is not set in your .env file. Please check your .env file.");
        return;
    }

    // 3. Generate text using the Groq API
    const result = await generateText({
      model: groq('llama3-8b-8192'),
      prompt: 'Write a short, fun, one-sentence fact about Node.js.',
    });

    console.log("\n--- Groq Response ---");
    console.log(result.text);

  } catch (error) {
    // This will catch issues like invalid API keys or network problems
    console.error("An error occurred during API call:", error.message);
  }
}

runGroqTest();