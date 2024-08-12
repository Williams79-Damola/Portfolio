import React from 'react';
import ade from '../assets/africa exam.png';
import eniola from '../assets/payme image.png';
import kike from '../assets/team image.jpg';



const projects =[
    {
        id: 1,
        name: "Africa Exam",
        technologies: "VELOX Stack",
        image: ade,
        github: "https://africa-exam.netlify.app/",
    },

    {
        id: 2,
        name: "Payme",
        technologies: "VELOX Stack",
        image: eniola,
        github: "https://williams-payme.netlify.app/",
    },

    {
        id: 3,
        name: "Sanlam",
        technologies: "VELOX Stack",
        image: eniola,
        github: "https://sanlam-12.netlify.app/",
    },

    {
        id: 4,
        name: "Resume",
        technologies: "VELOX Stack",
        image: kikeg,
        github: "https://williams-resume.netlify.app/",
    },
]


const Projects = () => {
  return (
    <div className='bg-black text-white py-20'id='about'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(projects =>(
                <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                   <img src={projects.image} alt={projects.name} className='round-lg mb-4 w-full h-48 object-cover'/>
                   <h3 className='text-2xl font-bold mb-2'>{projects.name}</h3>
                   <p className='text-gray-400 mb-4'>{projects.technologies}</p>
                   <a href={projects.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full "target="_blank"
                   rel='noopener noreferrer'>Netlify</a>
                </div>
            ))}
        </div>
     </div>
</div>
  );
};

export default Projects;