import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 hover:bg-cosmic-gradient hover:bg-400 hover:animate-[gradientCycle_2s_ease_infinite] transition-all duration-300">
          YS
        </p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <div className="relative group">
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `px-3 py-2 relative overflow-hidden transition-all duration-300 ${
                isActive ? "text-blue-600" : "text-black"
              }`
            }
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className={`
              relative z-10 transition-transform duration-300
              ${hoveredLink === 'about' ? 'transform translate-y-[-2px]' : ''}
            `}>
              About
            </span>
            
            {/* Curved underline only */}
            <span className={`
              absolute bottom-0 left-1 right-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-400
              rounded-full transform transition-all duration-300
              ${hoveredLink === 'about' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
            `} style={{
              transformOrigin: 'center',
              borderRadius: '100% 100% 0 0',
              height: '3px'
            }}></span>
          </NavLink>
        </div>
       
        <div className="relative group">
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              `px-3 py-2 relative overflow-hidden transition-all duration-300 ${
                isActive ? "text-blue-600" : "text-black"
              }`
            }
            onMouseEnter={() => setHoveredLink('projects')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className={`
              relative z-10 transition-transform duration-300
              ${hoveredLink === 'projects' ? 'transform translate-y-[-2px]' : ''}
            `}>
              Projects
            </span>
            
            {/* Curved underline only */}
            <span className={`
              absolute bottom-0 left-1 right-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-400
              rounded-full transform transition-all duration-300
              ${hoveredLink === 'projects' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
            `} style={{
              transformOrigin: 'center',
              borderRadius: '100% 100% 0 0',
              height: '3px'
            }}></span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;