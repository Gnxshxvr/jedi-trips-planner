import React, { useState } from 'react';
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Edit3, 
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useTrips } from '../hooks/useTrips';
import { Trip } from '../types';

interface TripManagerProps {
  onViewChange: (view: string) => void;
}

const TripManager: React.FC<TripManagerProps> = ({ onViewChange }) => {
  const { trips, loading, deleteTrip } = useTrips();
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-500';
      case 'confirmed': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planning': return AlertCircle;
      case 'confirmed': return Clock;
      case 'completed': return CheckCircle;
      default: return Clock;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const calculateDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300">Loading your trips...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              My Galactic Adventures
            </h1>
            <p className="text-slate-300">
              Manage your past, present, and future journeys across the galaxy
            </p>
          </div>
          <button
            onClick={() => onViewChange('chat')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>Plan New Trip</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
            <div className="text-2xl font-bold text-white mb-1">
              {trips.length}
            </div>
            <div className="text-slate-300 text-sm">Total Trips</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {trips.filter(t => t.status === 'planning').length}
            </div>
            <div className="text-slate-300 text-sm">In Planning</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {trips.filter(t => t.status === 'confirmed').length}
            </div>
            <div className="text-slate-300 text-sm">Confirmed</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {trips.filter(t => t.status === 'completed').length}
            </div>
            <div className="text-slate-300 text-sm">Completed</div>
          </div>
        </div>

        {/* Trips Grid */}
        {trips.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">No adventures yet!</h3>
            <p className="text-slate-300 mb-8 max-w-md mx-auto">
              Start planning your first galactic adventure. Our AI assistant will help you create
              the perfect itinerary for your journey across the stars.
            </p>
            <button
              onClick={() => onViewChange('chat')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Plan Your First Trip
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => {
              const StatusIcon = getStatusIcon(trip.status);
              const days = calculateDays(trip.startDate, trip.endDate);

              return (
                <div
                  key={trip.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedTrip(trip)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(trip.status)}`}>
                          {trip.status}
                        </span>
                        <StatusIcon className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle edit
                          }}
                          className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTrip(trip.id);
                          }}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700/50 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {trip.title}
                    </h3>
                    
                    <div className="flex items-center text-slate-300 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{trip.destination}</span>
                    </div>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {trip.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-slate-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{days} days</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{trip.participants} travelers</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{trip.budget} credits</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{formatDate(trip.startDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Trip Detail Modal */}
        {selectedTrip && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedTrip.title}</h2>
                    <div className="flex items-center space-x-4 text-slate-300">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{selectedTrip.destination}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(selectedTrip.startDate)} - {formatDate(selectedTrip.endDate)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTrip(null)}
                    className="text-slate-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Trip Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Status:</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getStatusColor(selectedTrip.status)}`}>
                          {selectedTrip.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Participants:</span>
                        <span className="text-white">{selectedTrip.participants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Budget:</span>
                        <span className="text-white">{selectedTrip.budget} credits</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Duration:</span>
                        <span className="text-white">{calculateDays(selectedTrip.startDate, selectedTrip.endDate)} days</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                    <p className="text-slate-300 leading-relaxed">{selectedTrip.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Itinerary</h3>
                  <div className="space-y-3">
                    {selectedTrip.itinerary.map((item) => (
                      <div key={item.id} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                                Day {item.day}
                              </span>
                              <span className="text-slate-300 text-sm">{item.time}</span>
                            </div>
                            <h4 className="font-semibold text-white mb-1">{item.activity}</h4>
                            <p className="text-slate-300 text-sm mb-2">{item.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-slate-400">
                              <span>{item.location}</span>
                              <span>{item.category}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-yellow-400 font-semibold">{item.cost} credits</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      onViewChange('chat');
                      setSelectedTrip(null);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                  >
                    Modify with AI
                  </button>
                  <button
                    onClick={() => setSelectedTrip(null)}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripManager;