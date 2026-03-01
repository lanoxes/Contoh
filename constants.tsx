
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethereal OS',
    description: 'A futuristic cloud-based operating system interface with real-time collaboration tools.',
    tags: ['React', 'WebSockets', 'Three.js'],
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    link: '#',
    impactScore: 92
  },
  {
    id: '2',
    title: 'Cognito AI',
    description: 'Generative AI platform for enterprise workflows focusing on automated data labeling.',
    tags: ['Gemini API', 'Node.js', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: '#',
    impactScore: 88
  },
  {
    id: '3',
    title: 'Velocity Finance',
    description: 'High-frequency trading dashboard with sub-100ms data updates and predictive charts.',
    tags: ['Next.js', 'D3.js', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1611974714024-462cd08a3c8a?auto=format&fit=crop&q=80&w=800',
    link: '#',
    impactScore: 95
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 98, icon: 'fa-brands fa-react', category: 'frontend' },
  { name: 'TypeScript', level: 95, icon: 'fa-solid fa-code', category: 'frontend' },
  { name: 'Node.js', level: 90, icon: 'fa-brands fa-node-js', category: 'backend' },
  { name: 'Gemini AI', level: 92, icon: 'fa-solid fa-brain', category: 'ai' },
  { name: 'UI/UX Design', level: 88, icon: 'fa-solid fa-pen-nib', category: 'design' },
  { name: 'Cloud Native', level: 85, icon: 'fa-solid fa-cloud', category: 'backend' }
];

export const SERVICES = [
  {
    title: 'AI Integration',
    desc: 'Bespoke LLM implementations using Gemini API to create intelligent user interfaces.',
    icon: 'fa-solid fa-microchip'
  },
  {
    title: 'High-Perf Frontend',
    desc: 'Ultra-fast React architectures optimized for core web vitals and smooth 60fps animations.',
    icon: 'fa-solid fa-bolt'
  },
  {
    title: 'Product Design',
    desc: 'User-centric design systems that bridge the gap between aesthetics and business goals.',
    icon: 'fa-solid fa-layer-group'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO @ InnovateFlow',
    text: 'Alex transformed our dashboard from a laggy mess into a seamless, AI-powered experience. Absolute game changer.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Thorne',
    role: 'Product Lead @ Zenith',
    text: 'The most creative engineer I have ever worked with. He treats every pixel like it is a work of art.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];
