import { useState, useEffect } from 'react';
import { Trip } from '../types';

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const savedTrips = localStorage.getItem('star-wars-trips');
      if (savedTrips) {
        setTrips(JSON.parse(savedTrips));
      } else {
        // Initialize with sample data
        const sampleTrips: Trip[] = [
          {
            id: '1',
            title: 'Tatooine Adventure',
            description: 'Explore the twin suns and visit Mos Eisley',
            destination: 'Tatooine',
            startDate: '2024-05-15',
            endDate: '2024-05-18',
            budget: 1500,
            participants: 2,
            status: 'planning',
            itinerary: [
              {
                id: '1',
                day: 1,
                time: '09:00',
                activity: 'Arrive at Mos Eisley Spaceport',
                location: 'Mos Eisley',
                description: 'Land and check into accommodations',
                cost: 200,
                category: 'transport'
              },
              {
                id: '2',
                day: 1,
                time: '14:00',
                activity: 'Cantina Experience',
                location: 'Mos Eisley Cantina',
                description: 'Meet locals and enjoy exotic drinks',
                cost: 150,
                category: 'entertainment'
              }
            ],
            createdAt: '2024-01-15',
            updatedAt: '2024-01-15'
          }
        ];
        setTrips(sampleTrips);
        localStorage.setItem('star-wars-trips', JSON.stringify(sampleTrips));
      }
      setLoading(false);
    }, 1000);
  }, []);

  const addTrip = (trip: Omit<Trip, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTrip: Trip = {
      ...trip,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    localStorage.setItem('star-wars-trips', JSON.stringify(updatedTrips));
    return newTrip;
  };

  const updateTrip = (id: string, updates: Partial<Trip>) => {
    const updatedTrips = trips.map(trip =>
      trip.id === id
        ? { ...trip, ...updates, updatedAt: new Date().toISOString() }
        : trip
    );
    setTrips(updatedTrips);
    localStorage.setItem('star-wars-trips', JSON.stringify(updatedTrips));
  };

  const deleteTrip = (id: string) => {
    const updatedTrips = trips.filter(trip => trip.id !== id);
    setTrips(updatedTrips);
    localStorage.setItem('star-wars-trips', JSON.stringify(updatedTrips));
  };

  const getTrip = (id: string) => {
    return trips.find(trip => trip.id === id);
  };

  return {
    trips,
    loading,
    addTrip,
    updateTrip,
    deleteTrip,
    getTrip
  };
};