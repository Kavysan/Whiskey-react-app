import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Background from '../assets/images/whiskey.jpg';

// const Home = ({ children }: { children: React.ReactNode }) => {
function Home() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  const getFontSize = () => {
    if (windowWidth <= 1180) {
      return '100px';
    } else if (windowWidth <= 640) {
      return '50px';
    }
    return '12rem';
  };

  const h1Styles: React.CSSProperties = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: getFontSize(),
    fontWeight: 900,
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
  };

  return (
    <div
      className="bg-brownsugar min-h-screen flex flex-col items-center justify-center"
      style={h1Styles}
    >
      <div className="text-center mb-20">
        <h1 className="text-white">WHISKEY COLLECTION</h1>
      </div>
      {/* {children} */}
    </div>
  );
};

export default Home;
