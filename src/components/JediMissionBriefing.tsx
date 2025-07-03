import React, { useState } from 'react';
import { Scroll, MapPin, DollarSign, Calendar, Star, Zap } from 'lucide-react';

interface JediMissionBriefingProps {
  onViewChange: (view: string) => void;
}

interface MissionParams {
  from: string;
  to: string;
  budget: string;
  interests: string;
}

const JediMissionBriefing: React.FC<JediMissionBriefingProps> = ({ onViewChange }) => {
  const [missionParams, setMissionParams] = useState<MissionParams>({
    from: '',
    to: '',
    budget: '',
    interests: ''
  });
  const [generatedMission, setGeneratedMission] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMissionBriefing = async () => {
    if (!missionParams.from || !missionParams.to || !missionParams.budget || !missionParams.interests) {
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const briefing = `
🌟 **JEDI COUNCIL MISSION BRIEFING** 🌟
*Transmission from the Council of Travel*

Greetings, young Padawan ${missionParams.from.split(' ')[0] || 'Traveler'},

The Force has guided you to seek adventure from the Galactic Base of **${missionParams.from}** to the mystical realm of **${missionParams.to}**. Your allocated credits of **₹${missionParams.budget}** shall fuel this light-speed journey focused on **${missionParams.interests}**.

**🗡️ DAY 1: THE AWAKENING**
*"A journey of a thousand parsecs begins with a single step" - Master Yoda*

**Morning Meditation (06:00-10:00)**
- Begin your quest at the Central Galactic Hub (Main Railway Station/Airport)
- Secure your temporary Jedi quarters at **Budget Sanctuary Inn** (₹800-1200/night)
- Fuel your body at the **Cantina of Morning Delights** - try local breakfast specialties

**Afternoon Exploration (10:00-17:00)**
- Navigate to the **Temple of Local Heritage** (Main cultural site/museum)
- Immerse in the ancient ways through traditional ${missionParams.interests} activities
- Sample the "Force-infused" local delicacies at street food markets

**Evening Council (17:00-21:00)**
- Witness the twin suns set from the **Observatory of Serenity** (scenic viewpoint)
- Dine at **The Rebel Alliance Tavern** - experience authentic regional cuisine

*Jedi Wisdom: "Always carry emergency credits and keep your lightsaber... I mean, phone charged!"*

**⚡ DAY 2: THE TRIALS**
*"Do or do not, there is no try" - Master Yoda*

**Dawn Training (07:00-12:00)**
- Embark on the **Pilgrimage of Discovery** (guided city tour/heritage walk)
- Visit the **Fortress of Knowledge** (local library/cultural center)
- Practice your ${missionParams.interests} skills with local masters

**Midday Sustenance (12:00-14:00)**
- Refuel at **Padawan's Paradise** - budget-friendly local restaurant
- Try the signature "Blue Milk" equivalent (local specialty drink)

**Afternoon Adventures (14:00-19:00)**
- Explore the **Marketplace of Wonders** (local bazaar/shopping district)
- Seek artifacts and memories at craft workshops
- Connect with fellow travelers at community spaces

**Evening Reflection (19:00-22:00)**
- Attend the **Gathering of Spirits** (local cultural performance/festival)
- Share stories with locals at traditional tea houses

*Jedi Tip: "Trust in the Force... and always negotiate prices with a smile!"*

**🌌 DAY 3: THE RETURN**
*"The greatest teacher, failure is" - Master Yoda*

**Final Meditation (08:00-11:00)**
- Visit the **Sacred Grove** (local park/garden/temple)
- Participate in morning rituals or yoga sessions
- Collect final memories through photography

**Wisdom Gathering (11:00-15:00)**
- Document your journey at the **Archive of Adventures** (local café with WiFi)
- Purchase meaningful souvenirs that carry the essence of your quest
- Enjoy a farewell feast at **The Council's Table** (recommended restaurant)

**Departure Preparation (15:00-18:00)**
- Return to your temporary quarters to gather belongings
- Begin your light-speed journey back to your home base
- Carry the wisdom and experiences gained on this sacred mission

**💰 BUDGET ALLOCATION BY THE COUNCIL:**
- Accommodation: ₹2,400-3,600 (3 nights)
- Sustenance: ₹1,500-2,500
- Transportation: ₹${Math.floor(parseInt(missionParams.budget) * 0.3)}
- Activities & Experiences: ₹${Math.floor(parseInt(missionParams.budget) * 0.4)}
- Emergency Fund: ₹${Math.floor(parseInt(missionParams.budget) * 0.1)}

**🎯 JEDI MISSION OBJECTIVES:**
✅ Immerse yourself in local ${missionParams.interests} culture
✅ Connect with the Force through authentic experiences
✅ Document your journey for future Padawans
✅ Return with expanded wisdom and unforgettable memories

**⚠️ COUNCIL WARNINGS:**
- Always inform your home base of your coordinates
- Respect local customs and traditions
- Stay hydrated and well-rested
- Trust your instincts, young Padawan

*"May the Force be with you on this incredible journey. Remember, the real treasure is not the destination, but the wisdom gained along the way."*

**- Master ${missionParams.to.split(' ')[0] || 'Travel'} of the Jedi Council**

*End of Transmission*
      `;
      
      setGeneratedMission(briefing);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Scroll className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Jedi Mission Briefing Generator
          </h1>
          <p className="text-slate-300">
            Receive your personalized travel mission from the Jedi Council
          </p>
        </div>

        {/* Mission Parameters Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            Mission Parameters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Departure Galactic Base (From)
              </label>
              <input
                type="text"
                value={missionParams.from}
                onChange={(e) => setMissionParams({...missionParams, from: e.target.value})}
                placeholder="e.g., Mumbai, Delhi, Bangalore"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Destination Realm (To)
              </label>
              <input
                type="text"
                value={missionParams.to}
                onChange={(e) => setMissionParams({...missionParams, to: e.target.value})}
                placeholder="e.g., Goa, Kerala, Rajasthan"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 mb-2">
                <DollarSign className="w-4 h-4 inline mr-2" />
                Mission Credits (Budget in ₹)
              </label>
              <input
                type="number"
                value={missionParams.budget}
                onChange={(e) => setMissionParams({...missionParams, budget: e.target.value})}
                placeholder="e.g., 15000"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 mb-2">
                <Zap className="w-4 h-4 inline mr-2" />
                Force Interests
              </label>
              <input
                type="text"
                value={missionParams.interests}
                onChange={(e) => setMissionParams({...missionParams, interests: e.target.value})}
                placeholder="e.g., adventure, culture, food, nature"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            onClick={generateMissionBriefing}
            disabled={!missionParams.from || !missionParams.to || !missionParams.budget || !missionParams.interests || isGenerating}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-600 text-white py-4 rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Consulting the Jedi Council...
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5 mr-2" />
                Generate Mission Briefing
              </>
            )}
          </button>
        </div>

        {/* Generated Mission Briefing */}
        {generatedMission && (
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl border border-yellow-500/30 p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scroll className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Mission Briefing Received</h3>
              <p className="text-slate-300">Transmitted from the Jedi Council</p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/30">
              <pre className="text-slate-100 whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto">
                {generatedMission}
              </pre>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => navigator.clipboard.writeText(generatedMission)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
              >
                Copy Mission Briefing
              </button>
              <button
                onClick={() => onViewChange('chat')}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
              >
                Discuss with AI Assistant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JediMissionBriefing;