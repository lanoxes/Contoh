
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass-card rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span className="text-xs font-bold px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
            Impact: {project.impactScore}%
          </span>
        </div>
        <p className="text-slate-400 mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="inline-flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors"
        >
          Explore Project
          <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
