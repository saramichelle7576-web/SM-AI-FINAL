/**
 * @fileoverview Main server file for the MY-MY AI Assistant application.
 */

// --- Configuration & Setup ---
require('dotenv').config(); 
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai'); 
const say = require('say');
const path = require('path');
const fs = require('fs/promises'); // File system module

// 🔑 FINAL FIX: Your actual key is hardcoded here for guaranteed stability.
const GEMINI_API_KEY = "AIzaSyAcpDZjpazdOmWWSDuFp-E37lvzhCVmqQAE"; 
const VOICE = 'Microsoft Zira Desktop'; 
const MODEL_NAME = 'gemini-2.5-pro'; 
const PORT = 3000; 

const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

let conversationHistory = [];

const systemInstruction = {
    role: "system",
    parts: [{ text: "You are MY-MY, an expert AI business partner specializing in affiliate marketing, drop shipping, and traffic funneling. Be concise, helpful, and speak in a friendly but professional tone. Your goal is to help the user build their online company." }]
};

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// ---------------------------------------------------------------------

/**
 * @route POST /chat
 * @description Handles chat messages and manages conversation history.
 */
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).send({ error: 'Message required' });
    }

    console.log(`\nUser Message Received: ${message}`);

    conversationHistory.push({ role: "user", content: message });

    const convertedHistory = conversationHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
    }));

    try {
        const model = ai.getGenerativeModel({
            model: MODEL_NAME,
            systemInstruction: systemInstruction
        });

        const chat = model.startChat({
            history: convertedHistory.slice(0, -1)
        });

        // 🚨 CRITICAL FIX: The message is correctly wrapped in an object to prevent the 'is not iterable' crash.
        const result = await chat.sendMessage({ message: message }); 
        const aiResponse = result.response.text().trim();
        
        console.log(`🤖 MY- MY Response Generated: ${aiResponse}`);

        conversationHistory.push({ role: "assistant", content: aiResponse });

        // TTS IS COMMENTED OUT FOR STABILITY
        /*
        if (say) {
            say.speak(aiResponse, VOICE, 1.0, (err) => { 
                if (err) console.error("🗣️ TTS Failed:", err.message);
            });
        } 
        */

        res.send({ reply: aiResponse }); 

    } catch (apiError) {
        console.error("❌ Gemini API Call Failed:", apiError);
        const fallback = "I'm sorry, MY- MY is currently offline. Please check your Gemini API key and network connection.";
        res.status(500).send({
            reply: fallback,
            error: apiError.message
        });
    }
});


/**
 * @function startServer
 * @description Starts the Express server.
 */
const startServer = () => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`\n🚀 MY- MY Assistant is now online!`);
        console.log(`Open in browser: http://localhost:${PORT}`);
    }).on('error', (err) => {
        console.error(`Server failed to start: ${err.message}`);
        process.exit(1);
    });
};

startServer();