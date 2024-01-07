import Background from '../assets/images/whiskey.jpg';
import { useState, useEffect } from 'react';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getFontSize = () => {
    return windowWidth <= 844 ? '50px' : '100px';
  };

  const h1Styles: React.CSSProperties = {
    backgroundImage: `url(${Background})`,
    backgroundSize: windowWidth > 100 ? 'cover' : 'contain', 
    backgroundRepeat: 'no-repeat',
    fontSize: getFontSize(),
    fontWeight: 900,
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
    overflow: 'hidden'
  };

  return (
    <div
      className="bg-brownsugar min-h-screen flex flex-col items-center justify-center"
      style={h1Styles}
    >
      <div className="text-center mb-20">
        <h1 className="text-white">WHISKEY COLLECTION</h1>
      </div>
    </div>
  );
};

export default Home;
