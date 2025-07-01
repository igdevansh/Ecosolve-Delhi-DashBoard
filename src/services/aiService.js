// src/services/aiService.js
import axios from 'axios';

// OpenAI API configuration
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Add this to your .env file

// Fallback responses for when API is not available
const fallbackResponses = {
  'PET': {
    alternatives: ['PLA (Polylactic Acid)', 'Recycled PET (rPET)', 'Glass', 'Aluminum'],
    description: 'For PET applications, consider biodegradable PLA for single-use items, recycled PET for durability, or glass/aluminum for premium reusable products.',
    sustainability: 'These alternatives reduce petroleum dependency and offer better end-of-life options.'
  },
  'HDPE': {
    alternatives: ['Recycled HDPE', 'Paper-based composites', 'Bamboo fiber composites'],
    description: 'HDPE applications can often use recycled HDPE content, paper-based materials for packaging, or bamboo composites for durable goods.',
    sustainability: 'These options maintain durability while reducing environmental impact through recycled content or renewable sources.'
  },
  'default': {
    alternatives: ['Bio-based plastics', 'Recycled materials', 'Natural fiber composites', 'Metal alternatives'],
    description: 'Consider bio-based alternatives like PLA or PHA, increase recycled content, or explore natural materials like hemp, flax, or wood fibers.',
    sustainability: 'These sustainable alternatives reduce fossil fuel dependency and offer better biodegradability or recyclability.'
  }
};

class AIService {
  async getMaterialSuggestion(formData) {
    try {
      // If API key is available, use OpenAI API
      if (API_KEY) {
        return await this.callOpenAI(formData);
      } else {
        // Use fallback responses
        return this.getFallbackResponse(formData);
      }
    } catch (error) {
      console.error('AI Service Error:', error);
      // Return fallback on any error
      return this.getFallbackResponse(formData);
    }
  }

  async callOpenAI(formData) {
    const prompt = this.buildPrompt(formData);
    
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an expert in sustainable materials and environmental engineering. Provide practical, realistic alternatives to plastic materials with specific focus on sustainability, availability, and performance characteristics."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 800,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return this.parseAIResponse(response.data.choices[0].message.content);
  }

  buildPrompt(formData) {
    return `
    I need sustainable alternatives for the following plastic application:

    Current Material: ${formData.currentPlasticType}
    Application/Use Case: ${formData.application}
    Desired Properties: ${formData.desiredProperties || 'Not specified'}

    Please provide:
    1. 3-4 specific sustainable material alternatives
    2. Brief explanation of why each alternative is suitable
    3. Sustainability benefits of each option
    4. Any limitations or considerations
    5. Estimated environmental impact reduction

    Format your response in a clear, practical manner suitable for someone looking to make sustainable material choices.
    `;
  }

  parseAIResponse(content) {
    return {
      type: 'ai',
      content: content,
      timestamp: new Date().toISOString(),
      source: 'OpenAI GPT-3.5'
    };
  }

  getFallbackResponse(formData) {
    const plasticType = formData.currentPlasticType.toUpperCase();
    const response = fallbackResponses[plasticType] || fallbackResponses['default'];
    
    return {
      type: 'fallback',
      alternatives: response.alternatives,
      description: response.description,
      sustainability: response.sustainability,
      application: formData.application,
      timestamp: new Date().toISOString(),
      source: 'EcoSolve Knowledge Base'
    };
  }
}

export default new AIService();