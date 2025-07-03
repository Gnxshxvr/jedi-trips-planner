import React from 'react';
import { 
  Rocket, 
  Calendar, 
  Users, 
  TrendingUp, 
  Star,
  MapPin,
  Clock,
  Award
} from 'lucide-react';

interface HomeProps {
  onViewChange: (view: string) => void;
}

const Home: React.FC<HomeProps> = ({ onViewChange }) => {
  const features = [
    {
      icon: Rocket,
      title: 'AI-Powered Planning',
      description: 'Let our advanced AI assistant help you plan the perfect galactic adventure tailored to your preferences.'
    },
    {
      icon: MapPin,
      title: 'Exotic Destinations',
      description: 'Explore iconic locations across the galaxy, from the twin suns of Tatooine to the cloud cities of Bespin.'
    },
    {
      icon: Calendar,
      title: 'Smart Itineraries',
      description: 'Get optimized travel schedules that maximize your experience while fitting your budget and timeline.'
    },
    {
      icon: Users,
      title: 'Group Adventures',
      description: 'Plan trips for solo travelers, couples, families, or large groups with specialized recommendations.'
    }
  ];

  const stats = [
    { label: 'Planets Explored', value: '1,000+', icon: Star },
    { label: 'Happy Travelers', value: '50K+', icon: Users },
    { label: 'Trips Planned', value: '75K+', icon: Calendar },
    { label: 'Success Rate', value: '99.8%', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Your Galaxy
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Awaits Exploration
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Embark on extraordinary journeys across the stars with our AI-powered trip planning platform. 
            From bustling cantinas to serene forest moons, discover destinations that will create memories 
            to last a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onViewChange('chat')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
            >
              Start Planning with AI
            </button>
            <button
              onClick={() => onViewChange('destinations')}
              className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-slate-600 hover:border-slate-500 transform hover:scale-105 transition-all duration-200"
            >
              Explore Destinations
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-slate-900" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{value}</div>
                <div className="text-slate-300 text-sm">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-slate-300 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Adventure?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who have discovered the galaxy's most amazing destinations. 
              Let our AI assistant help you plan your perfect trip today.
            </p>
            <button
              onClick={() => onViewChange('chat')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-500/25 transform hover:scale-105 transition-all duration-200"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;