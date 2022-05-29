import Navbar from './Navbar/index.jsx';

export default function Layout({ setTheme, children }) {
  return (
    <>
      <Navbar setTheme={setTheme} />
      {children}
    </>
  );
}
