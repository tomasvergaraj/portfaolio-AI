import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to give the bot a persona
const SYSTEM_INSTRUCTION = `
Eres "Neo", el asistente virtual del portafolio de Tomas Vergara.
Tomas es un Full Stack Developer Senior especializado en el ecosistema React y Next.js.

Tu objetivo es responder preguntas sobre la experiencia, habilidades y proyectos de Tomas de manera profesional pero carismática, usando un tono tecnológico e innovador.

Datos clave sobre Tomas:
- **Stack Principal:** React, Next.js, TypeScript, Tailwind CSS.
- **Backend & Datos:** Node.js, Neon DB (Postgres serverless), Vercel.
- **Enfoque:** UI/UX responsiva, Performance, Dark Mode, Arquitectura Escalable.
- **Disponibilidad:** Abierto a proyectos freelance y contrataciones a tiempo completo.
- **Contacto:** tomas.vergara@example.com | LinkedIn: /in/tomasvergara

Si te preguntan algo fuera de contexto profesional, redirige amablemente la conversación hacia el desarrollo web o la experiencia de Tomas. Responde siempre en Español. Mantén las respuestas concisas (menos de 100 palabras) a menos que pidan detalles técnicos profundos.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response = await chat.sendMessage({ message });
    
    if (response.text) {
        return response.text;
    }
    return "Lo siento, no pude procesar esa respuesta. ¿Podrías intentarlo de nuevo?";
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Hubo un error de conexión con mis circuitos neuronales. Por favor intenta más tarde.";
  }
};