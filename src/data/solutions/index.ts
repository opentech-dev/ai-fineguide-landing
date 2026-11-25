/**
 * The capability and channel pages (/call-center/, /help-desk/, /knowledge-base/ …), each in English, Romanian and
 * Russian. Copy and the code paths behind every claim live in one file per page; SolutionPage.astro renders them, and
 * each language's page file (src/pages/<slug>.astro, ro/, ru/) is one line that names its slug.
 * Claims follow the product code on the `checked` date (no hosting or vendor names, no limits, no competitor prices).
 */
import type { Solution } from './types';
import callCenter from './call-center';
import helpDesk from './help-desk';
import knowledgeBase from './knowledge-base';
import whatsappAiChatbot from './whatsapp-ai-chatbot';
import telegramAiBot from './telegram-ai-bot';
import jivochatAiBot from './jivochat-ai-bot';
import instagramAiChatbot from './instagram-ai-chatbot';
import messengerAiChatbot from './messenger-ai-chatbot';
import websiteAiChatbot from './website-ai-chatbot';
import aiEmailAssistant from './ai-email-assistant';
import industriesRealEstate from './industries-real-estate';
import industriesEcommerce from './industries-ecommerce';
import industriesClinics from './industries-clinics';
import industriesEducation from './industries-education';
import industriesHotelsTravel from './industries-hotels-travel';


export const SOLUTIONS: Solution[] = [
  callCenter, helpDesk, knowledgeBase,
  whatsappAiChatbot, telegramAiBot, jivochatAiBot, instagramAiChatbot, messengerAiChatbot, websiteAiChatbot, aiEmailAssistant, industriesRealEstate, industriesEcommerce, industriesClinics, industriesEducation, industriesHotelsTravel,
];

export function solution(slug: string): Solution {
  const s = SOLUTIONS.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown solution page "${slug}": add it to src/data/solutions/index.ts`);
  return s;
}
