import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Shield,
  Filter,
  Search,
  Globe,
  Sparkles
} from 'lucide-react';
import { destinations } from '../data/destinations';
import { realDestinations } from '../data/realDestinations';

interface DestinationsProps {
  onViewChange: (view: string) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ onViewChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  // Combine both destination arrays
  const allDestinations = [...destinations, ...realDestinations];

  const filteredDestinations = allDestinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.planet.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = difficultyFilter === 'all' || dest.difficulty === difficultyFilter;
    
    const matchesCategory = categoryFilter === 'all' || 
                           (categoryFilter === 'galactic' && dest.planet !== 'Earth - India') ||
                           (categoryFilter === 'earthly' && dest.planet === 'Earth - India');
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  const isGalacticDestination = (planet: string) => planet !== 'Earth - India';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Galactic & Earthly Destinations
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover extraordinary worlds and unforgettable experiences across the galaxy and Earth
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destinations, planets, or experiences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="text-slate-400 w-5 h-5" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Destinations</option>
              <option value="earthly">🌍 Earthly Realms</option>
              <option value="galactic">🌟 Galactic Adventures</option>
            </select>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 text-center">
            <div className="text-2xl font-bold text-white mb-1">{allDestinations.length}</div>
            <div className="text-slate-300 text-sm">Total Destinations</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">{realDestinations.length}</div>
            <div className="text-slate-300 text-sm">Earthly Realms</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{destinations.length}</div>
            <div className="text-slate-300 text-sm">Galactic Adventures</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">{filteredDestinations.length}</div>
            <div className="text-slate-300 text-sm">Filtered Results</div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group cursor-pointer"
              onClick={() => setSelectedDestination(destination.id)}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getDifficultyColor(destination.difficulty)}`}>
                      {destination.difficulty}
                    </span>
                    {isGalacticDestination(destination.planet) ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-purple-600 flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Galactic
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-blue-600 flex items-center">
                        <Globe className="w-3 h-3 mr-1" />
                        Earth
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(destination.safetyRating)}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  <div className="flex items-center text-slate-300 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{destination.planet}</span>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-300">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">
                        {isGalacticDestination(destination.planet) 
                          ? `${destination.estimatedCost} credits`
                          : `₹${destination.estimatedCost}`
                        }
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Destination Detail Modal */}
        {selectedDestination && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const dest = allDestinations.find(d => d.id === selectedDestination);
                if (!dest) return null;
                
                return (
                  <div>
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setSelectedDestination(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ×
                      </button>
                      <div className="absolute top-4 left-4">
                        {isGalacticDestination(dest.planet) ? (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-purple-600 flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Galactic Adventure
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-blue-600 flex items-center">
                            <Globe className="w-3 h-3 mr-1" />
                            Earthly Realm
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white">{dest.name}</h2>
                        <div className="flex items-center space-x-1">
                          <Shield className="w-5 h-5 text-green-400" />
                          <span className="text-white">{dest.safetyRating}/5</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-slate-300 mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{dest.planet}</span>
                      </div>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {dest.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <div className="flex items-center text-slate-300 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">Duration</span>
                          </div>
                          <span className="text-white font-semibold">{dest.duration}</span>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <div className="flex items-center text-slate-300 mb-2">
                            <DollarSign className="w-4 h-4 mr-2" />
                            <span className="text-sm">Est. Cost</span>
                          </div>
                          <span className="text-yellow-400 font-semibold">
                            {isGalacticDestination(dest.planet) 
                              ? `${dest.estimatedCost} credits`
                              : `₹${dest.estimatedCost}`
                            }
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3">Highlights</h3>
                        <div className="flex flex-wrap gap-2">
                          {dest.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-lg text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            onViewChange('chat');
                            setSelectedDestination(null);
                          }}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                        >
                          Plan Trip with AI
                        </button>
                        <button
                          onClick={() => setSelectedDestination(null)}
                          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all duration-200"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;