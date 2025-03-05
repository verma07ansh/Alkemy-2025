import { Crown, Sword, Music, Theater, Skull, Swords, Shield, Scroll, Trophy } from 'lucide-react';
import { TimelineEvent } from '../types/timeline';

export const timelineEvents: TimelineEvent[] = [
  {
    day: 1,
    date: "February 22, 2025",
    title: "Opening Ceremony",
    description: "Grand inauguration with medieval trumpet fanfare and torch lighting ceremony",
    icon: Crown,
    dayName: "Sports Day",
    events: [
      {
        time: "12:00 PM",
        title: "Turf Cricket",
        description: "Compete in a thrilling cricket match and win exciting prizes.",
        venue: "Turf"
      },
      {
        time: "12:00 PM",
        title: "Kabaddi Tournament",
        description: "Show your strength and strategy in an intense Kabaddi face-off.",
        venue: "Quadrangle"
      },
      {
        time: "12:00 PM",
        title: "Chess Competition",
        description: "Test your intellect and strategic skills in a competitive chess match.",
        venue: "Drawing Hall"
      },
      {
        time: "12:00 PM",
        title: "Carrom Tournament",
        description: "Showcase precision and skill in a thrilling carrom competition.",
        venue: "Drawing Hall"
      }
    ]
  },
  {
    day: 2,
    date: "February 23, 2025",
    title: "The Warriors' Challenge",
    description: "A day of endurance & physical powerness.",
    icon: Shield,
    dayName: "Sports Day",
    events: [
      {
        time: "09:00 AM - 06:00 PM",
        title: "Badminton Tournament",
        description: "Compete in solo badminton matches for cash prizes and trophies.",
        venue: "Quadrangle"
      },
      {
        time: "01:00 PM - 05:00 PM",
        title: "Athletics Events",
        description: "Sprint to victory in the 100m and 200m races, earning medals and certificates.",
        venue: "College Premises"
      },
      {
        time: "09:00 AM - 06:00 PM",
        title: "Table Tennis Tournament",
        description: "Showcase your table tennis skills and win certificates and trophies.",
        venue: "Drawing Hall"
      },
      {
        time: "12:00 PM - 04:00 PM",
        title: "Dodge Ball Tournament (Girls Only)",
        description: "Form a team and dodge your way to victory with trophies and certificates.",
        venue: "Turf"
      }
    ]
  },
  {
    day: 3,
    date: "February 24, 2025",
    title: "The Battle Of Champions",
    description: "The final test of strength before moving to other challenges",
    icon: Sword,
    dayName: "Sports Day",
    events: [
      {
        time: "09:00 AM - 06:00 PM",
        title: "Futsal Tournament",
        description: "Compete in an exciting futsal match for cash prizes, certificates, and trophies.",
        venue: "Ground"
      },
      {
        time: "09:00 AM - 06:00 PM",
        title: "Volleyball Tournament",
        description: "Show your skills in volleyball and win cash prizes, certificates, and trophies.",
        venue: "Volleyball Court"
      },
      {
        time: "TBD",
        title: "Kabaddi Finals",
        description: "Experience the intense final round of the kabaddi competition.",
        venue: "TBD"
      },
      {
        time: "02:00 PM - 06:00 PM",
        title: "Tug of War",
        description: "Test your team’s strength and strategy in a thrilling tug-of-war battle.",
        venue: "Basketball Court"
      }
    ]
  },
  {
    day: 4,
    date: "February 25, 2024",
    title: "The Inventors' Guild",
    description: "Technical events and workshops with mystical themes",
    icon: Scroll,
    dayName: "Technical Day",
    events: [
      {
        time: "09:00 AM - 06:00 PM",
        title: "Deadlift Competition",
        description: "Showcase your strength in the deadlift challenge and win medals and certificates.",
        venue: "College Premises"
      },
      {
        time: "TBD",
        title: "Dark Room Cricket Squad",
        description: "Cricket competition held in a dark room where visibility is limited and challenging.",
        venue: "Drawing Hall"
      },
      {
        time: "10:00 AM - 12:00 PM",
        title: "Capture the Flag",
        description: "Solo competition where participants try to capture the opponent's flag without being caught.",
        venue: "CC Lab"
      },
      {
        time: "03:00 PM - 05:00 PM",
        title: "Treasure Hunt",
        description: "Teams compete to find hidden treasures within a designated area using provided clues.",
        venue: "Quadrangle"
      },
      {
        time: "11:00 AM - 01:00 PM",
        title: "Prompt-To-Project Challenge (Duo)",
        description: "Duo coding challenge where participants develop projects based on a given prompt or theme.",
        venue: "CC Lab"
      },
      {
        time: "09:00 AM - 11:00 AM",
        title: "Webathon (Duo)",
        description: "Duo competition where teams develop a web-based application within a set timeframe.",
        venue: "CC Lab"
      },
      {
        time: "11:00 AM - 01:00 PM",
        title: "Meme War",
        description: "Meme creation contest where participants craft humorous, creative memes on specific themes.",
        venue: "CC Lab"
      },
      
      {
        time: "01:00 PM - 02:00 PM",
        title: "CodeRelay",
        description: "Relay-style coding competition where teams collaborate to solve coding challenges sequentially.",
        venue: "CC Lab"
      },
      {
        time: "10:00 AM - 12:00 PM",
        title: "SIP Comp DMS",
        description: "DMS competition focused on SIP-related projects and concepts within business management.",
        venue: "Lab 503"
      },
      {
        time: "10:00 AM - 5:00 PM",
        title: "Marketing Carnival",
        description: "Marketing challenge where DMS students showcase their skills in strategizing and executing campaigns.",
        venue: "In Campus"
      },
      {
        time: "12:00 PM - 03:00 PM",
        title: "HR Theatre DMS",
        description: "HR-related theater competition where participants create and perform scenarios based on HR concepts.",
        venue: "Seminar Hall 4th Floor"
      },
      {
        time: "1:00 PM - 03:00 PM",
        title: "Business Quiz Squad DMS",
        description: "Business quiz competition where students test their knowledge on various business topics.",
        venue: "DMS Seminar Hall"
      },
      {
        time: "Whole Day",
        title: "Drone Simulation",
        description: "Participants compete in simulated drone flying tasks, showcasing their control and precision skills.",
        venue: "103 Classroom"
      },
      {
        time: "05:00 PM - 07:00 PM",
        title: "RC Rocket League",
        description: "Remote-controlled rocket vehicle battle competition where teams compete for speed and maneuverability.",
        venue: "Ground"
      },
      {
        time: "01:00 PM - 03:00 PM",
        title: "RC Car Racing",
        description: "Competition involving remote-controlled cars racing for the best time and precision control.",
        venue: "Ground"
      },
      {
        time: "10:00 PM - 5:00 PM",
        title: "Photography",
        description: "Photography competition where participants capture stunning visuals based on a given theme.",
        venue: "Quadrangle"
      },
    ]
  },
  {
    day: 5,
    date: "Februrary 26, 2025",
    title: "The Digital Crusade",
    description: "Intense E-sports Battle and Gaming Competitions",
    icon: Skull,
    dayName: "E-sports Day",
    events: [
      {
        time: "26 and 27 Feb",
        title: "VALORANT",
        description: "Squad-based tactical shooter tournament where teams compete in strategic battles.",
        venue: "Quadrangle"
      },
      {
        time: "26 and 27 Feb",
        title: "BGMI",
        description: "Battle royale competition where squads fight to be the last team standing.",
        venue: "Seminar + Quadrangle"
      },
      {
        time: "26-Feb",
        title: "Brawl Halla (Mobile)",
        description: "Multiplayer fighting game competition where players battle in an arena-style format.",
        venue: "CC Lab"
      },
      {
        time: "26-Feb",
        title: "CODM",
        description: "First-person shooter tournament where squads compete in action-packed missions.",
        venue: "CC Lab"
      },
      {
        time: "26-Feb",
        title: "FIFA 24 (PS5)",
        description: "Real-time strategy game where players use decks to outplay their opponents.",
        venue: "Room 101, 102, 103"
      },
      {
        time: "26-Feb",
        title: "Stumble Guys",
        description: "Fun knockout-style game where players race through obstacle courses.",
        venue: "DMS Seminar Hall"
      },
      {
        time: "26-Feb",
        title: "Free Fire",
        description: "Fast-paced battle royale where teams compete for survival and dominance.",
        venue: "Seminar Hall"
      },
      {
        time: "26-Feb",
        title: "Mortal Kombat",
        description: "Classic fighting game competition where players showcase their combat skills.",
        venue: "Classroom 101, 102, 103"
      },
      {
        time: "26-Feb",
        title: "Clash Royale",
        description: "Real-time strategy game where players use decks to outplay their opponents.",
        venue: "CC Lab"
      }
    ]
  },
  {
    day: 6,
    date: "February 27, 2025",
    title: "The Digital Domain",
    description: "A Mystical battle of wits & reflexes",
    icon: Swords,
    dayName: "E-sports + Cultral Day",
    events: [
      {
        time: "27 Feb",
        title: "VALORANT Finals",
        description: "Squad-based tactical shooter tournament where teams compete in strategic battles.",
        venue: "Quadrangle"
      },
      {
        time: "27 Feb",
        title: "BGMI Finals",
        description: "Battle royale competition where squads fight to be the last team standing.",
        venue: "Seminar + Quadrangle"
      },
      {
        time: "11:00 AM - 05:00 PM",
        title: "Shark Tank",
        description: "Startup pitching competition in a Shark Tank format, where entrepreneurs present their ideas.",
        venue: "Seminar Hall"
      },
      {
        time: "10:00 AM - 11:00 AM",
        title: "Debate",
        description: "Team competition where four members debate on a given topic, testing their argumentative and reasoning skills.",
        venue: "Seminar Hall"
      },
      {
        time: "11:00 AM - 12:00 PM",
        title: "Poetry",
        description: "Solo competition where participants recite original or famous poems to showcase their literary and oratory skills.",
        venue: "Seminar Hall"
      },
      {
        time: "10:00 AM - 01:00 PM",
        title: "Rangoli",
        description: "Solo competition where participants create artistic rangoli designs using colored powders and other decorative materials.",
        venue: "Passage behind seminar hall"
      },
      {
        time: "10:00 AM - 1:00 PM",
        title: "Scenery Painting",
        description: "Solo competition where participants express their creativity by painting scenic landscapes.",
        venue: "Tutorial Room"
      },
      {
        time: "10:00 AM - 1:00 PM",
        title: "Tote Bag",
        description: "Solo competition where participants design and paint creative artwork on tote bags.",
        venue: "Tutorial Room"
      },
      {
        time: "12:00 PM - 01:00 PM",
        title: "Monoact",
        description: "Solo acting competition where participants perform a dramatic or comedic monologue.",
        venue: "Seminar Hall"
      },
      {
        time: "12:00 PM - 01:00 PM",
        title: "Reel Rush",
        description: "Short video-making competition where participants create engaging and creative reels.",
        venue: "Quadrangle"
      },
      
    ]
  },
  {
    day: 7,
    date: "February 28, 2025",
    title: "The Royal Gala",
    description: "A day of performances, music & medieval rivelry.",
    icon: Music,
    dayName: "Cultural Day",
    events: [
      {
        time: "09:30 AM - 12:00 PM",
        title: "Singing",
        description: "Solo and Group singing competition with cash prizes and certificates.",
        venue: "Quadrangle (Stage)"
      },
      {
        time: "01:00 PM - 05:00 PM",
        title: "Dance",
        description: "Solo, Duet, and Group dance competition with cash prizes and certificates.",
        venue: "Quadrangle (Stage)"
      },
      {
        time: "05:30 PM - 09:30 PM",
        title: "Fashion Show",
        description: "Group fashion show competition with cash prizes, certificates, and trophies.",
        venue: "Quadrangle (Stage)"
      }
    ]
  },
  {
    day: 8,
    date: "March 1, 2025",
    title: "The Crown's Finale",
    description: "Marking the ultimate day of glory and festivity.",
    icon: Trophy,
    dayName: "Final Day",
    events: [
      {
        time: "11:00 AM",
        title: "Solo Performances",
        description: "Individual talent showcase",
        venue: "Mini Auditorium"
      },
      {
        time: "02:00 PM",
        title: "Group Performances",
        description: "Team-based talent exhibitions",
        venue: "Main Stage"
      },
      {
        time: "05:00 PM",
        title: "Cultural Fusion Show",
        description: "Blend of medieval and modern performances",
        venue: "Amphitheater"
      }
    ]
  },
];