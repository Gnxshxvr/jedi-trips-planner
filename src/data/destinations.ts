import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Mos Eisley Cantina',
    planet: 'Tatooine',
    description: 'Experience the infamous cantina where Han Solo made his legendary escape. Enjoy exotic drinks and meet travelers from across the galaxy.',
    image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'beginner',
    estimatedCost: 1200,
    duration: '2-3 days',
    highlights: ['Cantina experience', 'Podracing arena', 'Binary sunset viewing', 'Jawa trading post'],
    safetyRating: 7
  },
  {
    id: '2',
    name: 'Cloud City',
    planet: 'Bespin',
    description: 'Float among the clouds in this luxurious mining colony. Perfect for those seeking refined accommodations with breathtaking views.',
    image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'intermediate',
    estimatedCost: 2500,
    duration: '4-5 days',
    highlights: ['Carbon freezing chamber tour', 'Luxury accommodations', 'Tibanna gas mining experience', 'Sky lounges'],
    safetyRating: 8
  },
  {
    id: '3',
    name: 'Endor Forest Moon',
    planet: 'Endor',
    description: 'Adventure through ancient forests with the Ewok tribes. Perfect for nature lovers and those seeking authentic cultural experiences.',
    image: 'https://images.pexels.com/photos/1005011/pexels-photo-1005011.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'advanced',
    estimatedCost: 1800,
    duration: '5-7 days',
    highlights: ['Ewok village stays', 'Forest trekking', 'Shield generator tours', 'Speeder bike racing'],
    safetyRating: 6
  },
  {
    id: '4',
    name: 'Coruscant Temple District',
    planet: 'Coruscant',
    description: 'Explore the political heart of the galaxy. Visit the former Jedi Temple and experience the grandeur of the galactic capital.',
    image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'intermediate',
    estimatedCost: 3000,
    duration: '3-4 days',
    highlights: ['Jedi Temple ruins', 'Senate building tours', 'Galactic museum', 'Upper level dining'],
    safetyRating: 9
  },
  {
    id: '5',
    name: 'Hoth Base Echo',
    planet: 'Hoth',
    description: 'Experience the thrill of survival in one of the galaxy\'s most challenging environments. Perfect for extreme adventure seekers.',
    image: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'advanced',
    estimatedCost: 2200,
    duration: '6-8 days',
    highlights: ['Rebel base tours', 'Tauntaun riding', 'Ice cave exploration', 'Wampa tracking'],
    safetyRating: 4
  },
  {
    id: '6',
    name: 'Naboo Royal Palace',
    planet: 'Naboo',
    description: 'Immerse yourself in the elegant culture of Naboo. Visit the royal palace, underwater cities, and beautiful waterfalls.',
    image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'beginner',
    estimatedCost: 2800,
    duration: '4-6 days',
    highlights: ['Royal palace tours', 'Underwater city visits', 'Gungan culture experience', 'Festival celebrations'],
    safetyRating: 9
  }
];