import DataTable from "../components/DataTable"
import { useState, useEffect } from 'react';
import Background from '../assets/images/whiskey.jpg'

function Dashboard() {
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

  return (
    <><div
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
        backgroundSize: windowWidth > 100 ? 'cover' : 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="h-screen bg-fixed"
    >
        <DataTable />
    </div></>
  );
}

export default Dashboard;