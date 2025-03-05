import { LucideIcon, Crown, Coins, Code, Music, Trophy, Shield, Users, Share2 } from 'lucide-react';

interface CouncilMember {
  name: string;
  role: string;
  class?: string;
  image: string;
}

interface CouncilSection {
  title: string;
  description: string;
  icon: LucideIcon;
  members: CouncilMember[];
}

export const councilSections: CouncilSection[] = [
  {
    title: "General Secretaries",
    description: "The leaders who guide and oversee all council activities",
    icon: Crown,
    members: [
      {
        name: "Alexander Wright",
        role: "General Secretary",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format"
      },
      {
        name: "Sarah Johnson",
        role: "Deputy General Secretary",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format"
      },
      {
        name: "Michael Chen",
        role: "Assistant Secretary",
        class: "BE Mechanical",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format"
      }
    ]
  },
  {
    title: "Treasurers",
    description: "Managing and overseeing the financial aspects of all events",
    icon: Coins,
    members: [
      {
        name: "Emily Rodriguez",
        role: "Head Treasurer",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "David Kim",
        role: "Deputy Treasurer",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format"
      },
      {
        name: "Lisa Chen",
        role: "Finance Coordinator",
        class: "BE Electronics",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format"
      }
    ]
  },
  {
    title: "Technical Council",
    description: "Organizing and managing all technical events and workshops",
    icon: Code,
    members: [
      {
        name: "James Wilson",
        role: "Technical Head",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format"
      },
      {
        name: "Sophia Lee",
        role: "Technical Coordinator",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "Ryan Martinez",
        role: "Workshop Lead",
        class: "BE Electronics",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format"
      }
    ]
  },
  {
    title: "Cultural Council",
    description: "Bringing life to college through cultural events and activities",
    icon: Music,
    members: [
      {
        name: "Isabella Garcia",
        role: "Cultural Head",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "Daniel Park",
        role: "Event Coordinator",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format"
      },
      {
        name: "Maya Patel",
        role: "Performance Lead",
        class: "BE Mechanical",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format"
      }
    ]
  },
  {
    title: "Sports Council",
    description: "Organizing sports events and promoting athletic excellence",
    icon: Trophy,
    members: [
      {
        name: "Marcus Johnson",
        role: "Sports Secretary",
        class: "BE Mechanical",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format"
      },
      {
        name: "Emma Thompson",
        role: "Sports Coordinator",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "Carlos Rivera",
        role: "Team Manager",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format"
      }
    ]
  },
  {
    title: "Discipline Council",
    description: "Maintaining order and ensuring smooth event operations",
    icon: Shield,
    members: [
      {
        name: "Victoria Chang",
        role: "Discipline Head",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "Nathan Brown",
        role: "Security Coordinator",
        class: "BE Mechanical",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format"
      },
      {
        name: "Raj Sharma",
        role: "Safety Officer",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format"
      }
    ]
  },
  {
    title: "PR Council",
    description: "Building relationships and managing external communications",
    icon: Users,
    members: [
      {
        name: "Sophie Anderson",
        role: "PR Head",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "Oliver Wilson",
        role: "Outreach Coordinator",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format"
      },
      {
        name: "Aisha Khan",
        role: "Communications Lead",
        class: "BE Electronics",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format"
      }
    ]
  },
  {
    title: "Social Media Council",
    description: "Managing our digital presence across all platforms",
    icon: Share2,
    members: [
      {
        name: "Lucas Zhang",
        role: "Social Media Head",
        class: "BE Computer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format"
      },
      {
        name: "Hannah Lee",
        role: "Content Creator",
        class: "BE IT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format"
      },
      {
        name: "Arjun Patel",
        role: "Digital Strategy Lead",
        class: "BE Electronics",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format"
      }
    ]
  }
];