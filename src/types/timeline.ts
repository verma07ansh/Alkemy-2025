export interface SubEvent {
  time: string;
  title: string;
  description: string;
  venue: string;
}

export interface TimelineEvent {
  day: number;
  date: string;
  title: string;
  description: string;
  icon: any;
  dayName: string;
  events: SubEvent[];
}