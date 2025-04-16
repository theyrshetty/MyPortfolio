// import { Html } from "@react-three/drei";

// const Loader = () => {
//   return (
//     <Html>
//       <div className='flex justify-center items-center'>
//         <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
//       </div>
//     </Html>
//   );
// };

// export default Loader;
import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress even for fast loads
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + (100 - prev) * 0.2;
        return next > 99 ? 100 : next;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-300 border-opacity-20"></div>
          
          {/* Spinning loader */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
          
          {/* Progress number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
          </div>
        </div>
        
        <div className="mt-3 text-blue-600 font-medium">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;