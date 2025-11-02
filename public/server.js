import 'dotenv/config'; // Loads GEMINI_API_KEY from .env file
import express from 'express';
import { GoogleGenAI } from '@google/genai';
import say from 'say';
import path from 'path';

// --- Configuration Setup ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.warn('\n⚠️ GEMINI_API_KEY not found in environment. Gemini calls will likely fail without it.');
    // don't exit here — allow server to run so the user can see static site and fix .env
}

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Gemini Client (the client will still try to use environment credentials)
const ai = new GoogleGenAI({});

const VOICE = 'Microsoft David Desktop';
const MODEL_NAME = 'gemini-2.5-flash';

// Simple in-memory conversation history
let conversationHistory = [];

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve files from the `public` folder (this file sits in that folder already)
app.use(express.static(path.join(process.cwd(), 'public')));

// --- API Route: Handle Incoming Chat Messages ---
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).send({ error: 'Message required' });
    }

    console.log(`\nUser Message Received: ${message}`);

    // 1. Add user message to history
    conversationHistory.push({ role: 'user', content: message });

    // 2. Prepare the messages array for the Gemini API
    const systemPrompt = {
        role: 'system',
        parts: [{ text: "You are MY-MY, an expert AI business partner specializing in affiliate marketing, drop shipping, and traffic funneling. Be concise, helpful, and speak in a friendly but professional tone. Your goal is to help the user build their online company." }]
    };

    const convertedHistory = conversationHistory.map((msg) => ({
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

        const aiResponse = response.text || String(response);
        console.log(`🤖 MY-MY Response Generated: ${aiResponse}`);

        // 4. Update in-memory history
        conversationHistory.push({ role: 'assistant', content: aiResponse });

        // 5. Integrate Text-to-Speech (MY-MY speaks!)
        try {
            say.speak(aiResponse, VOICE, 1.0, (err) => {
                if (err) console.error('❌ TTS Failed:', err.message || err);
            });
        } catch (ttsErr) {
            console.error('❌ TTS threw an error:', ttsErr.message || ttsErr);
        }

        // 6. Send the response back to the client
        res.send({ reply: aiResponse });
    } catch (apiError) {
        console.error('❌ Gemini API Call Failed:', apiError && apiError.message ? apiError.message : apiError);
        const fallback = "I'm sorry, MY-MY is currently offline. Please check your Gemini API key and network connection.";
        try { say.speak(fallback, VOICE); } catch {}

        res.status(500).send({
            reply: fallback,
            error: apiError && apiError.message ? apiError.message : String(apiError)
        });
    }
});


// --- Server Start Function ---
const startServer = () => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log('\n✅ MY-MY Assistant is now online!');
        console.log(`Open in browser: http://localhost:${PORT}`);
        try { say.speak('My My is ready. I can help you build your business.', VOICE); } catch (e) {}
    }).on('error', (err) => {
        console.error(`Server failed to start: ${err.message}`);
        process.exit(1);
    });
};

startServer();