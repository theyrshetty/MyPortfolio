import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  // Filter out Artstation and Instagram from footer links
  const footerLinks = socialLinks.filter(link => 
    !['Artstation', 'Instagram'].includes(link.name)
  );
  
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />
      <div className='footer-container'>
        <p>
          © 2025 <strong>Yashas Shetty</strong>. All rights reserved.
        </p>
        <div className='flex gap-3 justify-center items-center'>
          {footerLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              target='_blank'
              className="transform transition-all duration-300 hover:scale-125"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;