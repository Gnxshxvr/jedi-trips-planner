import React, { useState } from 'react';
import Navigation from './components/Navigation';
import StarField from './components/StarField';
import Home from './components/Home';
import Destinations from './components/Destinations';
import ChatAssistant from './components/ChatAssistant';
import TripManager from './components/TripManager';
import Profile from './components/Profile';
import Settings from './components/Settings';
import JediMissionBriefing from './components/JediMissionBriefing';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home onViewChange={setCurrentView} />;
      case 'destinations':
        return <Destinations onViewChange={setCurrentView} />;
      case 'jedi-briefing':
        return <JediMissionBriefing onViewChange={setCurrentView} />;
      case 'chat':
        return <ChatAssistant onViewChange={setCurrentView} />;
      case 'trips':
        return <TripManager onViewChange={setCurrentView} />;
      case 'profile':
        return <Profile onViewChange={setCurrentView} />;
      case 'settings':
        return <Settings onViewChange={setCurrentView} />;
      default:
        return <Home onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-x-hidden">
      <StarField />
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
}

export default App;
