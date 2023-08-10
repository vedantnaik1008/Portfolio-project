import { useState } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button className='text-white bg-black'
        onClick={() => setDarkMode(!darkMode)}
      >
        Dark Mode
      </button>
    </div>  
  );
}

export default DarkMode;