import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("Gemini API key is not configured");
}

export const ai = new GoogleGenAI({
  apiKey: apiKey,
});

