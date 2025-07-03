import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Star, 
  MapPin, 
  Calendar, 
  DollarSign,
  Edit3,
  Save,
  X
} from 'lucide-react';

interface ProfileProps {
  onViewChange: (view: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onViewChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Baby Yoda',
    email: 'yoda@starwars.com',
    avatar: 'https://tse4.mm.bing.net/th/id/OIP.ftPS7fgv2DeKe8xPpG8mTgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    bio: 'Strong in the Force, small in size, Grogu I am — snack first, save galaxy later.',
    location: 'Somewhere between Dagobah and Tatooine',
    joined: '2025-07-03',
    preferences: {
      budget: 2500,
      interests: ['Adventure', 'Culture', 'History', 'Food'],
      travelStyle: 'adventure'
    }
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Trips Completed', value: '13', icon: MapPin },
    { label: 'Planets Visited', value: '12', icon: Star },
    { label: 'Credits Spent', value: '45,000', icon: DollarSign },
    { label: 'Years Traveling', value: '3', icon: Calendar }
  ];

  const achievements = [
    { title: 'First Journey', description: 'Completed your first galactic adventure', icon: '🚀' },
    { title: 'Explorer', description: 'Visited 5 different planets', icon: '🌟' },
    { title: 'Adventurer', description: 'Completed 10 trips', icon: '🏆' },
    { title: 'Culture Enthusiast', description: 'Experienced 3 different alien cultures', icon: '🎭' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Traveler Profile
          </h1>
          <p className="text-slate-300">
            Your galactic journey stats and preferences
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-slate-600"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    value={editedProfile.bio}
                    onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
                  <p className="text-slate-300 mb-3">{profile.email}</p>
                  <p className="text-slate-300 mb-4 leading-relaxed">{profile.bio}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Joined {profile.joined}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Edit Button */}
            <div className="flex space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-all duration-200"
                  >
                    <Save className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-slate-600 hover:bg-slate-700 text-white p-2 rounded-lg transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all duration-200"
                >
                  <Edit3 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-slate-900" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-slate-300 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Travel Preferences */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Travel Preferences</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-slate-300 mb-3">Preferred Budget</h4>
              <div className="text-2xl font-bold text-yellow-400">{profile.preferences.budget} credits</div>
            </div>
            <div>
              <h4 className="text-slate-300 mb-3">Travel Style</h4>
              <div className="text-lg text-white capitalize">{profile.preferences.travelStyle}</div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-slate-300 mb-3">Interests</h4>
            <div className="flex flex-wrap gap-2">
              {profile.preferences.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
          <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map(({ title, description, icon }) => (
              <div key={title} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg">
                <div className="text-2xl">{icon}</div>
                <div>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="text-slate-300 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;