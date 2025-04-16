import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, socialLinks  } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  // Filter social links to get only professional links
  const professionalLinks = socialLinks.filter(link => 
    ['Contact', 'GitHub', 'LinkedIn'].includes(link.name)
  );
  
  // Filter social links to get only artistic/social media links
  const artisticLinks = socialLinks.filter(link => 
    ['Artstation', 'Instagram'].includes(link.name)
  );
  
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Yashas
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        An undergraduate at Christ University, Bengaluru, India, majoring in Statistics and Computer Science, with a strong interest in analytics for business and finance.
        Musician by passion, artist by curiosity.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've been building, learning, and contributing in real settings. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Get in Touch</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            The next spark of creativity could be just one message away!
          </p>
        </div>

        <div className='mt-8 flex flex-wrap gap-8'>
          {professionalLinks.map((link) => {
            // Custom colors for each professional platform
            let hoverBgColor, hoverBorderColor, hoverTextColor, activeBgColor;
            
            if (link.name === 'Contact') {
              hoverBgColor = 'hover:bg-gray-100';
              hoverBorderColor = 'hover:border-gray-400';
              hoverTextColor = 'group-hover:text-gray-700';
              activeBgColor = 'active:bg-gray-200';
            } else if (link.name === 'GitHub') {
              hoverBgColor = 'hover:bg-yellow-50';
              hoverBorderColor = 'hover:border-yellow-300';
              hoverTextColor = 'group-hover:text-yellow-600';
              activeBgColor = 'active:bg-yellow-100';
            } else if (link.name === 'LinkedIn') {
              hoverBgColor = 'hover:bg-blue-50';
              hoverBorderColor = 'hover:border-blue-300';
              hoverTextColor = 'group-hover:text-blue-600';
              activeBgColor = 'active:bg-blue-100';
            }

            return (
              <a
                href={link.link}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 bg-white p-4 rounded-xl shadow-md 
                hover:shadow-xl ${hoverBgColor} ${activeBgColor} active:translate-y-1
                transform transition-all duration-300 ease-in-out cursor-pointer
                border border-transparent ${hoverBorderColor} group relative
                overflow-hidden`}
              >
                {/* Animated hover effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-50"></span>
                
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300 z-10'
                />
                <span className={`text-black font-medium ${hoverTextColor} transition-colors duration-300 z-10`}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
      
      {/* New section for artistic/social media links */}
      <div className='py-16'>
        <h3 className='subhead-text'>My Creative Escapades</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I make noise with my band and doodles with my hand — catch 'em both online!
          </p>
        </div>

        <div className='mt-8 flex flex-wrap gap-8'>
          {artisticLinks.map((link) => {
            // Custom colors for each social platform
            let hoverBgColor, hoverBorderColor, hoverTextColor, activeBgColor;
            
            if (link.name === 'Artstation') {
              hoverBgColor = 'hover:bg-orange-50';
              hoverBorderColor = 'hover:border-orange-300';
              hoverTextColor = 'group-hover:text-orange-600';
              activeBgColor = 'active:bg-orange-100';
            } else if (link.name === 'Instagram') {
              hoverBgColor = 'hover:bg-pink-50';
              hoverBorderColor = 'hover:border-pink-300';
              hoverTextColor = 'group-hover:text-pink-600';
              activeBgColor = 'active:bg-pink-100';
            }

            return (
              <a
                href={link.link}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 bg-white p-4 rounded-xl shadow-md 
                hover:shadow-xl ${hoverBgColor} ${activeBgColor} active:translate-y-1
                transform transition-all duration-300 ease-in-out cursor-pointer
                border border-transparent ${hoverBorderColor} group relative
                overflow-hidden`}
              >
                {/* Animated hover effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-50"></span>
                
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300 z-10'
                />
                <span className={`text-black font-medium ${hoverTextColor} transition-colors duration-300 z-10`}>
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;