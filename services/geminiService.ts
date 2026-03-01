
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: "You are the 'Digital Twin' of Alex, a Senior Frontend Engineer. You are helpful, professional, witty, and deeply knowledgeable about web development, AI, and design. Keep your answers concise and engaging. Mention Alex's skills in React and Gemini AI occasionally." }]},
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        temperature: 0.9,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble thinking right now. Maybe try again in a second? Even high-end digital twins need a coffee break!";
  }
};
