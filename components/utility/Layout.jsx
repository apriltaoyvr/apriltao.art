import Navbar from './navbar/index';

export default function Layout({ setTheme, children }) {
  return (
    <>
      <Navbar setTheme={setTheme} />
      {children}
    </>
  );
}
