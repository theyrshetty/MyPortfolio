import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>
      <p className='text-slate-500 mt-2 leading-relaxed'>
        Here are a few projects I've worked on that reflect my foundational experience and areas of interest.
        I'm always open to feedback, collaboration, or exciting new opportunities to grow.
        If any of them catch your eye or spark an idea, feel free to reach out!
      </p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full backdrop-blur-sm bg-white bg-opacity-5 p-6 rounded-2xl border border-gray-200 border-opacity-20 shadow-xl' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-2 font-poppins font-semibold text-blue-600
                  px-6 py-3 rounded-xl transition-all duration-300
                  bg-blue-50 bg-opacity-30 backdrop-blur-xl
                  border border-blue-100 border-opacity-50 shadow-md
                  hover:bg-blue-100 hover:bg-opacity-40 hover:backdrop-blur-xl
                  hover:border-blue-200 hover:shadow-lg
                  hover:scale-105 hover:text-blue-700'
                >
                  <span>Live Link</span>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain transition-transform duration-300 group-hover:translate-x-2'
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default Projects;