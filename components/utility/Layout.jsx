import Navbar from './Navbar';

/* Layout Component for the Navbar to be on all routes
** This is to make prop drilling less painful */
export default function Layout({ theme, setTheme, children }) {
  /* Prop drill setTheme into the Navbar */
  return (
    <>
      <Navbar setTheme={setTheme} theme={theme} />
      {children}
    </>
  );
}
