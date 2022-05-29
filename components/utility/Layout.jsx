import Navbar from './Navbar/index';

export default function Layout({ setTheme, children }) {
  return (
    <>
      <Navbar setTheme={setTheme} />
      {children}
    </>
  );
}
