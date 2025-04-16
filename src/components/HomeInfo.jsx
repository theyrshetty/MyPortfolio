import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Yashas</span>
        👋
        <br />
        Welcome to my Portfolio — take a look around!
      </h1>
    );
  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            Collaborated on various projects <br /> and gained valuable skills along the way.
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn hover:bg-slate-200 hover:translate-x-1 hover:-translate-y-1 transition-all'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
            Led several projects to completion, gaining hands-on experience along the way. <br /> Curious about the results?
        </p>
        <Link to='/projects' className='neo-brutalism-white neo-btn hover:bg-slate-200 hover:translate-x-1 hover:-translate-y-1 transition-all'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Got a project in mind? <br/> I'm just a few keystrokes away
      </p>
      <Link to='/contact' className='neo-brutalism-white neo-btn hover:bg-slate-200 hover:translate-x-1 hover:-translate-y-1 transition-all'>
        Let's talk!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }
  return null;
};

export default HomeInfo;