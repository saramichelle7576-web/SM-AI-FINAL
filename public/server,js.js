# FINAL COMMAND: CREATES server.js AND THEN RUNS IT
@'
import 'dotenv/config'; // Loads GEMINI_API_KEY from .env file
import express from 'express';
import { GoogleGenAI } from '@google/genai';
import say from 'say';
import path from 'path';

// --- Configuration Setup ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 

if (!GEMINI_API_KEY) {
    console.error("\n🛑 FATAL ERROR: GEMINI_API_KEY not found. Please ensure it is set in your .env file.");
    process.exit(1);
}

const app = express();
const PORT = 3000;

// Initialize Gemini Client
const ai = new GoogleGenAI({});

const VOICE = 'Microsoft David Desktop'; 
const MODEL_NAME = 'gemini-2.5-flash'; 

// Simple in-memory conversation history
let conversationHistory = [];

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Assumes the frontend file is still in a 'public' subfolder for this Express app
app.use(express.static(path.join(process.cwd(), 'public'))); 

// --- API Route: Handle Incoming Chat Messages ---
app.post('/chat', async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).send({ error: 'Message required' });
    }
    
    console.log(`\nUser Message Received: ${message}`);
    
    // 1. Add user message to history
    conversationHistory.push({ role: "user", content: message });

    // 2. Prepare the messages array for the Gemini API
    const systemPrompt = {
        role: "system", 
        parts: [{ text: "You are MY-MY, an expert AI business partner specializing in affiliate marketing, drop shipping, and traffic funneling. Be concise, helpful, and speak in a friendly but professional tone. Your goal is to help the user build their online company." }]
    };
    
    const convertedHistory = conversationHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
    }));

    const contents = [systemPrompt, ...convertedHistory];

    // 3. Call Gemini API (with robust error handling)
    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: contents,
            config: {
                temperature: 0.3 
            }
        });

        const aiResponse = response.text;
        console.log(`🤖 MY- MY Response Generated: ${aiResponse}`);

        // 4. Update in-memory history
        conversationHistory.push({ role: "assistant", content: aiResponse });

        // 5. Integrate Text-to-Speech (MY- MY speaks!)
        say.speak(aiResponse, VOICE, 1.0, (err) => {
            if (err) console.error("❌ TTS Failed:", err.message);
        });

        // 6. Send the response back to the client
        res.send({ reply: aiResponse });

    } catch (apiError) {
        console.error("❌ Gemini API Call Failed:", apiError.message);
        const fallback = "I'm sorry, MY- MY is currently offline. Please check your Gemini API key and network connection.";
        say.speak(fallback, VOICE);
        
        res.status(500).send({ 
            reply: fallback,
            error: apiError.message 
        });
    }
});


// --- Server Start Function ---
const startServer = () => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`\n✅ MY- MY Assistant is now online!`);
        console.log(`Open in browser: http://localhost:${PORT}`);
        say.speak("My My is ready. I can help you build your business.", VOICE);
    }).on('error', (err) => {
        console.error(`Server failed to start: ${err.message}`);
        process.exit(1);
    });
};

startServer();
'@ | Out-File -FilePath server.js -Encoding Default ; node server.js