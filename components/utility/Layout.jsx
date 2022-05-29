import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import LoadingScreen from './LoadingScreen';

export default function Layout({ setTheme, children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 750);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar setTheme={setTheme} />
          {children}
        </>
      )}
    </>
  );
}
