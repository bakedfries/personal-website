import React, { useState } from 'react';
import { Mail, FileText, ExternalLink, Code, Database, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const ProfessionalView: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | ProjectCategory>('ALL');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'ALL' || p.category === filter
  );

  return (
    <div className="text-persian-dark animate-fade-in relative z-10">
      {/* Hero Section */}
      <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start pt-20 pb-10">
        <h2 className="text-gold-accent font-sans text-lg tracking-widest uppercase mb-4 font-bold">
          Hello, I am
        </h2>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-persian-red leading-tight">
          Data Scientist <br />
          <span className="text-persian-dark">& CS Major.</span>
        </h1>
        <p className="text-xl md:text-2xl font-sans text-gray-700 max-w-2xl mb-8 leading-relaxed">
          Specializing in predictive modeling, distributed systems, and turning complex datasets into actionable intelligence.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="mailto:email@example.com" className="group flex items-center px-8 py-3 bg-persian-red text-paper-cream font-bold rounded-sm shadow-lg hover:bg-persian-dark transition-all">
            <Mail className="mr-2 w-5 h-5" />
            Contact Me
          </a>
          <a href="#" className="group flex items-center px-8 py-3 border-2 border-persian-red text-persian-red font-bold rounded-sm hover:bg-persian-red hover:text-paper-cream transition-all">
            <FileText className="mr-2 w-5 h-5" />
            View Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
             <h3 className="text-4xl font-serif text-persian-red mb-6 relative inline-block">
               About
               <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gold-accent"></span>
             </h3>
          </div>
          <div className="md:col-span-8">
            <div className="bg-white p-8 md:p-12 shadow-xl border-l-4 border-persian-red rounded-r-lg">
              <p className="font-sans text-lg leading-loose text-gray-800">
                <span className="text-6xl float-left font-serif text-persian-red mr-4 mt-[-10px]">A</span>
                s a dedicated researcher and developer, I bridge the gap between theoretical computer science and practical data application. My work focuses on building robust systems that scale, while maintaining the mathematical rigor required for high-stakes data analysis. When I'm not training models, I'm optimizing algorithms for efficiency and readability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <h3 className="text-4xl font-serif text-persian-red mb-4 md:mb-0">Selected Projects</h3>
           
           {/* Filter Bar */}
           <div className="flex space-x-2 bg-white p-1 rounded-full shadow-sm border border-gray-200">
             {(['ALL', 'Data Science', 'CS'] as const).map((cat) => (
               <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${
                  filter === cat 
                    ? 'bg-persian-red text-white' 
                    : 'text-gray-500 hover:text-persian-red'
                }`}
               >
                 {cat === 'ALL' ? 'All Work' : cat}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group block bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-t-2 border-transparent hover:border-gold-accent transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  project.category === 'CS' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                }`}>
                  {project.category === 'CS' ? <Code className="w-3 h-3 mr-1"/> : <Database className="w-3 h-3 mr-1"/>}
                  {project.category}
                </span>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-persian-red transition-colors" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-persian-red transition-colors">
                {project.title}
              </h4>
              <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-gray-500 border border-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Papers (was Publications) Section */}
      <section id="papers" className="py-20 border-t border-gray-200">
        <h3 className="text-4xl font-serif text-persian-red mb-10">Papers</h3>
        <ul className="space-y-6">
          <li className="flex items-start group cursor-pointer">
            <span className="text-gold-accent mr-4 mt-1"><ChevronRight /></span>
            <div>
              <h4 className="text-xl font-bold font-serif group-hover:underline decoration-persian-red underline-offset-4">
                Optimizing Neural Network Latency in Edge Devices
              </h4>
              <p className="text-gray-600 font-sans mt-1">
                IEEE International Conference on Data Mining (2023) • <span className="italic">Primary Author</span>
              </p>
            </div>
          </li>
          <li className="flex items-start group cursor-pointer">
            <span className="text-gold-accent mr-4 mt-1"><ChevronRight /></span>
            <div>
              <h4 className="text-xl font-bold font-serif group-hover:underline decoration-persian-red underline-offset-4">
                A Comparative Study of Consensus Algorithms
              </h4>
              <p className="text-gray-600 font-sans mt-1">
                Journal of Parallel and Distributed Computing (2022) • <span className="italic">Co-Author</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProfessionalView;