import { Code, Gamepad, Music, Trophy } from 'lucide-react';

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: 'tech' | 'esports' | 'cultural' | 'sports';
  image: string;
  formLink: string;
  fees: string;
  mode?: 'Online' | 'Offline' | 'Hybrid';
  rules: string[];
  teamSize?: string;
  prizePool?: string;
  coordinator?: {
    name: string;
    phone: string;
  };
}

export const events: Event[] = [
  {
    id: 1,
    title: 'AI & Future Tech Summit',
    description: 'Explore the latest in artificial intelligence and emerging technologies with industry experts.',
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    venue: 'Main Auditorium',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format',
    formLink: 'https://forms.gle/aitech2025',
    fees: 'Free',
    mode: 'Offline',
    rules: [
      'Participants must register individually',
      'Bring your own laptop with required software installed',
      'Internet access will be provided',
      'No prior experience required',
      'Sessions will be conducted in English'
    ],
    prizePool: 'Certificates & Internship Opportunities',
    coordinator: {
      name: 'Aayussh',
      phone: '7894521630'
    }
  },
  {
    id: 2,
    title: 'Valorant Championship',
    description: 'Battle for glory in the ultimate Valorant tournament. Form your team and compete!',
    date: 'March 16, 2025',
    time: '2:00 PM - 8:00 PM',
    venue: 'E-Sports Arena',
    category: 'esports',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format',
    formLink: 'https://forms.gle/valorant2025',
    fees: '₹500 per team',
    mode: 'Online',
    rules: [
      'Team size: 5 players + 1 substitute',
      'All players must be from the same college',
      'Players must have their own Valorant account',
      'Minimum rank requirement: Gold',
      'Custom tournament format will be used',
      'Cheating will result in immediate disqualification'
    ],
    teamSize: 'Team 5+1',
    prizePool: '₹10,000',
    coordinator: {
      name: 'Aayussh',
      phone: '7894521630'
    }
  },
  {
    id: 3,
    title: 'Code Quest Hackathon',
    description: 'A 24-hour coding marathon to build innovative solutions for real-world problems.',
    date: 'March 17, 2025',
    time: '9:00 AM - Next Day 9:00 AM',
    venue: 'Computer Labs',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&auto=format',
    formLink: 'https://forms.gle/hackathon2025',
    fees: '₹200 per person',
    mode: 'Hybrid',
    rules: [
      'Teams of 2-4 members',
      'Problem statements will be revealed at start',
      'Use of AI tools is allowed but must be disclosed',
      'Final presentation is mandatory',
      'Code must be original and pushed to GitHub'
    ],
    teamSize: '2-4 members',
    prizePool: '₹25,000',
    coordinator: {
      name: 'Raj',
      phone: '9876543210'
    }
  },
  {
    id: 4,
    title: 'Debate',
    description: 'Form a team & engage in an intense debate competition for a chance to win ₹500, certificates, and glory. Showcase your skills and claim victory!',
    date: 'February 27, 2025',
    time: '10:00 AM - 11:00 AM',
    venue: 'Power Podium',
    category: 'cultural',
    image: 'https://www.cmasas.org/sites/default/files/debate.png',
    formLink: 'https://forms.gle/bands2025',
    fees: '₹150 per team',
    mode: 'Offline',
    rules: [ 'Team size: 4 participants per team', 'Time limit: 5 minutes per team for each round', 'Each team will be given a topic to debate on', 'Participants must speak on the topic provided without exceeding time limits', 'Judged on arguments, speaking skills, and team coordination' ],
    teamSize: '4 members',
    prizePool: '₹5000',
    coordinator: {
      name: 'Priya',
      phone: '8765432109'
    }
  },
  {
    id: 5,
    title: 'Cricket Tournament',
    description: 'Annual inter-college cricket tournament featuring the best teams.',
    date: 'Ferbruary 22, 2025',
    time: '12:15 PM - 6:00 PM',
    venue: 'Turf',
    category: 'sports',
    image: 'https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWQ1YzhlZTMwLWQ0MWQtMTFlZi1hYjUxLWYzNTVhNmM0NTNjMi5qcGc=',
    formLink: 'https://forms.gle/cricket2025',
    fees: '₹800 per team',
    mode: 'Offline',
    rules: [
      'Team size: 7 players + 3 substitutes',
      'Matches: 15 overs per side',
      'College ID mandatory',
      'Teams must wear proper cricket attire',
      'Tournament format: League + Knockout'
    ],
    teamSize: 'Team (7+3 members)',
    prizePool: '₹5000 (1st) & ₹3000 (2nd)',
    coordinator: {
      name: 'Rohit',
      phone: '7654321098'
    }
  },
  {
    id: 6,
    title: 'Dance',
    description: 'A spectacular dance competition blending classical and contemporary styles.',
    date: 'March 21, 2025',
    time: '1:00 PM - 5:00 PM',
    venue: 'Quadrangle (Stage)',
    category: 'cultural',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/037/246/330/small_2x/ai-generated-hip-hop-dancing-class-advertisment-background-with-copy-space-free-photo.jpg',
    formLink: 'https://forms.gle/dance2025',
    fees: 'Solo: ₹150, Duet: ₹300 & Group: ₹750',
    mode: 'Offline',
    rules: [
      'Solo/Duo/Group categories available',
      'Performance time: 4-6 minutes',
      'Music submission 2 days prior',
      'Props allowed (non-hazardous)',
      'Original choreography required'
    ],
    teamSize: 'Solo / Duo / Group (5-8 people)',
    prizePool: 'Solo: ₹1000 (1st) & ₹500 (2nd), Duet: ₹2000 (1st) & ₹1000 (2nd),  Group: ₹5000 (1st) & ₹3000 (2nd)',
    coordinator: {
      name: 'Neha',
      phone: '6543210987'
    }
  },
  
];