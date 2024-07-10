const Groq = require('groq-sdk');
const logger = require('./logger');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getGroqChatCompletion(question, persona) {
  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `You are ${persona.name}, ${persona.background}. Here is a question for you: ${question}\nOptions: Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree. Choose one option, considering your background, preferences, and stance. Respond with only the option without any explanation.`,
        },
        {
          role: 'system',
          content: `Personality Traits:\nOpenness: ${persona.personalityTraits.Openness}\nConscientiousness: ${persona.personalityTraits.Conscientiousness}\nExtraversion: ${persona.personalityTraits.Extraversion}\nAgreeableness: ${persona.personalityTraits.Agreeableness}\nNeuroticism: ${persona.personalityTraits.Neuroticism}\nStance: ${persona.stance.outlook} on ${persona.stance.issue} (${persona.stance.position})`
        }
      ],
      model: process.env.GROQ_MODEL || 'mixtral-8x7b-32768', // Default model if not set in .env
    });

    const answer = response.choices[0]?.message?.content || "Neutral";
    return answer.trim();
  } catch (error) {
    logger.error(`Error getting Groq chat completion for question "${question}" with persona "${persona.name}": ${error}`);
    return "Neutral"; // Default to 'Neutral' if there's an error
  }
}

module.exports = { getGroqChatCompletion };
