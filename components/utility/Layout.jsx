import Navbar from './Navbar';

export default function Layout({ setTheme, children }) {
  return (
    <>
      <Navbar setTheme={setTheme} />
      {children}
    </>
  );
}
