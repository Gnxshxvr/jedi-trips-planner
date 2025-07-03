import { useState, useCallback } from 'react';
import { ChatMessage } from '../types';
import { destinations } from '../data/destinations';
import { realDestinations } from '../data/realDestinations';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Greetings, young Padawan! I am JediTripBot, your AI companion for planning extraordinary journeys across the galaxy and beyond. Whether you seek adventure on distant worlds, cultural experiences with alien civilizations, or relaxation in exotic locations, I am here to help you craft the perfect itinerary.\n\nI can help you plan trips to:\n🌟 **Galactic Destinations** - Star Wars themed adventures\n🌍 **Earthly Realms** - Real-world destinations across India and beyond\n📜 **Jedi Mission Briefings** - Personalized 3-day travel plans\n\nJust tell me your departure point, destination, budget, and interests, and I\'ll create an immersive adventure plan worthy of the Jedi Council!\n\nWhat kind of adventure calls to you today, young traveler?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (content: string, tripId?: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date().toISOString(),
      tripId
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Enhanced AI responses with both real and Star Wars destinations
    setTimeout(() => {
      let response = '';
      const lowerContent = content.toLowerCase();
      
      // Check for specific destination requests
      if (lowerContent.includes('goa')) {
        response = "Ah, the tropical paradise of Goa calls to you, young Padawan! This coastal realm offers the perfect balance of relaxation and adventure. I recommend:\n\n🏖️ **Beach Meditation**: Start your days with sunrise yoga on Anjuna Beach\n🏛️ **Heritage Exploration**: Visit the ancient Portuguese churches and forts\n🍤 **Culinary Journey**: Savor fresh seafood and traditional Goan cuisine\n🌊 **Water Adventures**: Try parasailing, jet skiing, or dolphin watching\n\n**Budget**: ₹8,000-12,000 for 3-4 days\n**Best Time**: October to March\n\nWould you like me to create a detailed Jedi Mission Briefing for your Goa adventure?";
      } else if (lowerContent.includes('kerala')) {
        response = "The mystical backwaters of Kerala await, young traveler! Known as 'God's Own Country,' this realm offers profound spiritual experiences:\n\n🛶 **Houseboat Journey**: Navigate serene backwaters on traditional kettuvallams\n🌿 **Ayurvedic Healing**: Experience ancient wellness treatments\n🌶️ **Spice Quest**: Explore aromatic spice plantations in Munnar\n🐘 **Wildlife Encounters**: Visit Periyar Wildlife Sanctuary\n\n**Budget**: ₹12,000-18,000 for 4-6 days\n**Force Tip**: Book houseboats in advance during peak season!\n\nShall I generate a complete mission briefing for your Kerala expedition?";
      } else if (lowerContent.includes('rajasthan')) {
        response = "The royal realm of Rajasthan beckons, noble Padawan! Land of kings and desert adventures:\n\n🏰 **Palace Stays**: Experience royal hospitality in heritage hotels\n🐪 **Desert Safari**: Journey through the Thar Desert on camelback\n🎭 **Cultural Immersion**: Witness folk dances and traditional music\n🛍️ **Artisan Markets**: Discover exquisite handicrafts and textiles\n\n**Budget**: ₹15,000-25,000 for 5-7 days\n**Jedi Wisdom**: Carry water and sun protection in the desert!\n\nWould you like a detailed itinerary for your royal adventure?";
      } else if (lowerContent.includes('himachal') || lowerContent.includes('mountains')) {
        response = "The mountain realm of Himachal Pradesh calls to your adventurous spirit! Perfect for connecting with nature's Force:\n\n🏔️ **Mountain Trekking**: Explore scenic trails in Manali and Dharamshala\n🏛️ **Temple Visits**: Seek wisdom at ancient mountain temples\n🚵 **Adventure Sports**: Try paragliding, river rafting, and mountain biking\n🍎 **Local Culture**: Experience Himachali hospitality and cuisine\n\n**Budget**: ₹10,000-16,000 for 4-6 days\n**Force Guidance**: Pack warm clothes even in summer!\n\nShall I craft a mountain adventure mission for you?";
      } else if (lowerContent.includes('ladakh')) {
        response = "Ladakh, the 'Land of High Passes,' awaits the most adventurous Padawans! This high-altitude realm tests your limits:\n\n🏔️ **High Altitude Lakes**: Visit the mystical Pangong Tso and Tso Moriri\n🏛️ **Buddhist Monasteries**: Find enlightenment at ancient gompas\n🚴 **Mountain Biking**: Challenge yourself on world's highest motorable roads\n⭐ **Stargazing**: Experience the clearest night skies in the galaxy\n\n**Budget**: ₹20,000-30,000 for 7-10 days\n**Critical Warning**: Acclimatization is essential at high altitude!\n\nReady for this ultimate Jedi trial?";
      } else if (lowerContent.includes('andaman')) {
        response = "The pristine Andaman Islands offer a tropical paradise, young explorer! Perfect for water-based adventures:\n\n🤿 **Underwater Exploration**: Discover vibrant coral reefs through scuba diving\n🏖️ **Beach Bliss**: Relax on untouched beaches with crystal-clear waters\n🏛️ **Historical Journey**: Visit the Cellular Jail and learn about freedom fighters\n🐠 **Marine Life**: Snorkel with exotic fish and sea turtles\n\n**Budget**: ₹18,000-25,000 for 5-7 days\n**Jedi Tip**: Book water activities in advance!\n\nShall I plan your island adventure?";
      } else if (lowerContent.includes('jedi') || lowerContent.includes('mission') || lowerContent.includes('briefing')) {
        response = "Ah, I sense you seek a Jedi Mission Briefing, young Padawan! Navigate to the 'Jedi Missions' section in the navigation menu above, where you can input your departure point, destination, budget, and interests. The Council will then provide you with a detailed 3-day mission briefing complete with accommodations, activities, and wisdom for your journey. May the Force guide your travels!";
      } else if (lowerContent.includes('budget') || lowerContent.includes('cost') || lowerContent.includes('price')) {
        response = "Wise question about credits, young traveler! Here's the Council's budget guidance:\n\n💰 **Earthly Realms (India)**:\n- Budget trips: ₹8,000-12,000 (3-4 days)\n- Comfort journeys: ₹15,000-20,000 (5-6 days)\n- Luxury adventures: ₹25,000+ (7+ days)\n\n🌟 **Galactic Destinations**:\n- Standard missions: 2,500-4,000 credits\n- Premium experiences: 5,000+ credits\n\nFactors affecting cost: accommodation type, season, activities, and group size. Would you like a specific destination breakdown?";
      } else if (lowerContent.includes('tatooine') || lowerContent.includes('star wars') || lowerContent.includes('galaxy')) {
        response = "Ah, a true connoisseur of galactic destinations! Our Star Wars themed experiences include:\n\n🌟 **Tatooine**: Desert cantina experiences and twin sunset viewing\n☁️ **Cloud City**: Luxury accommodations with sky-high views\n🌲 **Endor**: Forest adventures with Ewok cultural immersion\n🏙️ **Coruscant**: Political intrigue and urban exploration\n❄️ **Hoth**: Extreme survival challenges\n🏛️ **Naboo**: Royal palace tours and underwater cities\n\nThese immersive experiences blend real-world locations with Star Wars themes. Which galactic destination calls to you?";
      } else if (lowerContent.includes('food') || lowerContent.includes('eat') || lowerContent.includes('cuisine')) {
        response = "The galaxy offers incredible culinary experiences, Padawan! \n\n🌍 **Earthly Delicacies**:\n- Goan seafood and Portuguese fusion\n- Kerala's coconut-based curries and appam\n- Rajasthani dal baati churma and laal maas\n- Himachali siddu and madra\n- Ladakhi thukpa and momos\n\n🌟 **Galactic Specialties**:\n- Blue milk on Tatooine\n- Cloud City's exotic delicacies\n- Ewok forest feast on Endor\n\nFor earthly missions, I always recommend trying local street food - it's where you'll find the most authentic flavors! What type of cuisine calls to your taste buds?";
      } else if (lowerContent.includes('destinations') || lowerContent.includes('places') || lowerContent.includes('where')) {
        response = "The Force guides me to recommend these incredible destinations, young Padawan:\n\n🌍 **Popular Earthly Realms**:\n- Goa: Beach paradise and Portuguese heritage\n- Kerala: Backwaters and Ayurvedic wellness\n- Rajasthan: Royal palaces and desert adventures\n- Himachal: Mountain retreats and spiritual journeys\n- Ladakh: High-altitude challenges and Buddhist culture\n- Andaman: Pristine beaches and marine adventures\n\n🌟 **Galactic Destinations**:\n- Tatooine, Cloud City, Endor, Coruscant, Hoth, Naboo\n\nEach offers unique experiences for different types of travelers. What kind of adventure speaks to your soul?";
      } else {
        const responses = [
          "That sounds like an exciting adventure, young Padawan! The Force is strong with your travel desires. I can help you explore both earthly realms and galactic destinations. Would you like recommendations for specific places in India or perhaps a Star Wars themed adventure?",
          "Wise choice, traveler! Whether you seek the beaches of Goa, the mountains of Himachal, or the deserts of Rajasthan, I can guide your journey. For galactic adventures, we have Tatooine, Cloud City, and more! What type of experience calls to you?",
          "I sense great potential for an unforgettable journey! I can help you plan trips to real destinations across India or immersive Star Wars experiences. How many days are you planning, and what's your preferred budget range?",
          "The Force flows through many paths, young one! From the backwaters of Kerala to the twin suns of Tatooine, countless adventures await. Tell me about your interests - adventure, culture, relaxation, or perhaps something more exotic?",
          "Excellent timing for travel planning! I can create detailed itineraries for Indian destinations like Goa, Kerala, Rajasthan, and more, or craft galactic adventures to iconic Star Wars locations. What destination calls to your heart?"
        ];
        response = responses[Math.floor(Math.random() * responses.length)];
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
        tripId
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage
  };
};