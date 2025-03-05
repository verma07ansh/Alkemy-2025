import { Palette, Code } from 'lucide-react';

export interface Builder {
  name: string;
  role: string;
  class: string;
  image: string;
  icon: typeof Palette | typeof Code;
}

export const builders: Builder[] = [
  {
    name: "Ashfaque Shaikh",
    role: "Design Artisan",
    class: "TY BCA",
    image: "/assets/Ashfaque Shaikh.jpg",
    icon: Palette
  },
  {
    name: "Ansh Verma",
    role: "Code Enchanter",
    class: "B.tech CSE",
    image: "/assets/Ansh Verma.jpg",
    icon: Code
  }
];