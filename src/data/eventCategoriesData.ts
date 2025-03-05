import { Code, Music, Gamepad, Trophy } from 'lucide-react';

export const categories = [
  {
    title: "Technical Quests",
    description: "Challenge thy mind with ancient coding riddles, mystical hackathons, and enchanted technical workshops.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format",
    categoryId: "tech",
    stats: [
      { value: "15+", label: "Quests" },
      { value: "₹2L", label: "Treasury" },
      { value: "8+", label: "Guilds" },
      { value: "12+", label: "Masters" }
    ]
  },
  {
    title: "Cultural Festivities",
    description: "Showcase thy artistic prowess through magical performances, dance battles, and creative exhibitions.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format",
    categoryId: "cultural",
    stats: [
      { value: "12+", label: "Events" },
      { value: "₹1.5L", label: "Treasury" },
      { value: "6+", label: "Realms" },
      { value: "10+", label: "Sages" }
    ]
  },
  {
    title: "E-Sports Tournament",
    description: "Engage in legendary digital battles, conquer virtual realms, and prove thy gaming mastery.",
    icon: Gamepad,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format",
    categoryId: "esports",
    stats: [
      { value: "8+", label: "Battles" },
      { value: "₹1L", label: "Treasury" },
      { value: "32+", label: "Clans" },
      { value: "24h", label: "Duration" }
    ]
  },
  {
    title: "Sports Legends",
    description: "Test thy physical might in grand tournaments, archery contests, and medieval sports challenges.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format",
    categoryId: "sports",
    stats: [
      { value: "10+", label: "Trials" },
      { value: "₹1.2L", label: "Treasury" },
      { value: "24+", label: "Teams" },
      { value: "5+", label: "Arenas" }
    ]
  }
];