import React, { useState } from 'react';
import { 
  Home, 
  Map, 
  MessageCircle, 
  User, 
  Settings, 
  Sparkles,
  Scroll
} from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'trips', label: 'My Trips', icon: Map },
    { id: 'destinations', label: 'Destinations', icon: Sparkles },
    { id: 'jedi-briefing', label: 'Jedi Missions', icon: Scroll },
    { id: 'chat', label: 'AI Assistant', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleLogoClick = () => {
    const newClickCount = logoClicks + 1;
    setLogoClicks(newClickCount);
    
    if (newClickCount === 3) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setLogoClicks(0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-md border-b border-blue-500/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={handleLogoClick}
          >
            {/* Simple oval logo with subtle Star Wars inspiration */}
            <div className="w-10 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
              {/* Central spark */}
              <Sparkles className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Subtle rebel alliance inspired elements */}
              <div className="absolute top-1 left-2 w-1 h-1 bg-slate-800/30 rounded-full"></div>
              <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-slate-800/30 rounded-full"></div>
            </div>
            
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              GalaxyGuide
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onViewChange(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === id
                    ? 'bg-blue-600/80 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 text-slate-300 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="grid grid-cols-3 gap-2">
            {navItems.slice(0, 6).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onViewChange(id)}
                className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-all duration-200 ${
                  currentView === id
                    ? 'bg-blue-600/80 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]">
          <div className="bg-slate-800 border border-yellow-500/50 rounded-xl p-6 max-w-sm mx-4 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              🌟 Easter Egg Found! 🌟
            </h3>
            <p className="text-slate-300 text-sm mb-3">
              "The Force is strong with this one..."
            </p>
            <p className="text-slate-400 text-xs">
              May the Force guide your travels!
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;