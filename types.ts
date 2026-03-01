
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  impactScore: number;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'ai';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
