import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Whether it's a project, role, or collaboration — <br className='sm:block hidden' />
        I'd love to hear from you!
      </p>
      <Link 
        to='/contact' 
        className='btn hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-gray-300 transform transition-all duration-300 ease-in-out relative overflow-hidden group'
      >
        {/* Animated hover effect */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-20"></span>
        
        <span className="flex items-center">
          Contact
          <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1 transform transition-transform">→</span>
        </span>
      </Link>
    </section>
  );
};

export default CTA;