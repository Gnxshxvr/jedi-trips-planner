export interface Trip {
  id: string;
  title: string;
  description: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  participants: number;
  status: 'planning' | 'confirmed' | 'completed';
  itinerary: ItineraryItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ItineraryItem {
  id: string;
  day: number;
  time: string;
  activity: string;
  location: string;
  description: string;
  cost: number;
  category: 'transport' | 'accommodation' | 'activity' | 'food' | 'entertainment';
}

export interface Destination {
  id: string;
  name: string;
  planet: string;
  description: string;
  image: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedCost: number;
  duration: string;
  highlights: string[];
  safetyRating: number;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
  tripId?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    budget: number;
    interests: string[];
    travelStyle: 'luxury' | 'adventure' | 'cultural' | 'relaxed';
  };
}