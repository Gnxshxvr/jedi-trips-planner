import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Moon, 
  Sun,
  Volume2,
  VolumeX,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

interface SettingsProps {
  onViewChange: (view: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ onViewChange }) => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sms: false,
      tripUpdates: true,
      promotions: false
    },
    privacy: {
      profileVisibility: 'public',
      showTravelHistory: true,
      allowContactFromTravelers: true
    },
    appearance: {
      theme: 'dark',
      language: 'en',
      soundEnabled: true
    },
    account: {
      twoFactorEnabled: false,
      autoSave: true,
      dataBackup: true
    }
  });

  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handleSettingChange = (category: string, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const settingSections = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { key: 'email', label: 'Email Notifications', type: 'toggle' },
        { key: 'push', label: 'Push Notifications', type: 'toggle' },
        { key: 'sms', label: 'SMS Notifications', type: 'toggle' },
        { key: 'tripUpdates', label: 'Trip Updates', type: 'toggle' },
        { key: 'promotions', label: 'Promotional Offers', type: 'toggle' }
      ]
    },
    {
      title: 'Privacy',
      icon: Shield,
      settings: [
        { 
          key: 'profileVisibility', 
          label: 'Profile Visibility', 
          type: 'select',
          options: [
            { value: 'public', label: 'Public' },
            { value: 'friends', label: 'Friends Only' },
            { value: 'private', label: 'Private' }
          ]
        },
        { key: 'showTravelHistory', label: 'Show Travel History', type: 'toggle' },
        { key: 'allowContactFromTravelers', label: 'Allow Contact from Other Travelers', type: 'toggle' }
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      settings: [
        { 
          key: 'theme', 
          label: 'Theme', 
          type: 'select',
          options: [
            { value: 'dark', label: 'Dark Theme' },
            { value: 'light', label: 'Light Theme' },
            { value: 'auto', label: 'Auto' }
          ]
        },
        { 
          key: 'language', 
          label: 'Language', 
          type: 'select',
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
            { value: 'de', label: 'German' }
          ]
        },
        { key: 'soundEnabled', label: 'Sound Effects', type: 'toggle' }
      ]
    },
    {
      title: 'Account',
      icon: Lock,
      settings: [
        { key: 'twoFactorEnabled', label: 'Two-Factor Authentication', type: 'toggle' },
        { key: 'autoSave', label: 'Auto-save Drafts', type: 'toggle' },
        { key: 'dataBackup', label: 'Automatic Data Backup', type: 'toggle' }
      ]
    }
  ];

  const renderSetting = (section: string, setting: any) => {
    const value = settings[section as keyof typeof settings][setting.key as keyof any];

    switch (setting.type) {
      case 'toggle':
        return (
          <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
            <div>
              <div className="text-white font-medium">{setting.label}</div>
            </div>
            <button
              onClick={() => handleSettingChange(section, setting.key, !value)}
              className={`relative w-12 h-6 rounded-full transition-all duration-200 ${
                value ? 'bg-blue-600' : 'bg-slate-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${
                  value ? 'left-7' : 'left-1'
                }`}
              />
            </button>
          </div>
        );

      case 'select':
        return (
          <div className="p-4 bg-slate-700/30 rounded-lg">
            <div className="text-white font-medium mb-2">{setting.label}</div>
            <select
              value={value}
              onChange={(e) => handleSettingChange(section, setting.key, e.target.value)}
              className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {setting.options.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-slate-300">
            Customize your galactic travel experience
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {settingSections.map(({ title, icon: Icon, settings: sectionSettings }) => (
            <div key={title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
              </div>
              
              <div className="space-y-3">
                {sectionSettings.map((setting) => (
                  <div key={setting.key}>
                    {renderSetting(title.toLowerCase(), setting)}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Password Change Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Security</h2>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setShowPasswordChange(!showPasswordChange)}
                className="w-full text-left p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Change Password</span>
                  <span className="text-slate-400">
                    {showPasswordChange ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </span>
                </div>
              </button>
              
              {showPasswordChange && (
                <div className="space-y-3 p-4 bg-slate-700/20 rounded-lg">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all duration-200">
                      Update Password
                    </button>
                    <button
                      onClick={() => setShowPasswordChange(false)}
                      className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <h2 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-4 bg-red-900/30 rounded-lg hover:bg-red-900/50 transition-all duration-200">
                <div className="text-red-300 font-medium">Export Data</div>
                <div className="text-red-400 text-sm">Download all your travel data</div>
              </button>
              <button className="w-full text-left p-4 bg-red-900/30 rounded-lg hover:bg-red-900/50 transition-all duration-200">
                <div className="text-red-300 font-medium">Delete Account</div>
                <div className="text-red-400 text-sm">Permanently delete your account and all data</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;