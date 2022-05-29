import Navbar from './Navbar';

export default function Layout({ theme, setTheme, children }) {
  return (
    <>
      <Navbar setTheme={setTheme} theme={theme} />
      {children}
    </>
  );
}
