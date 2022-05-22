/* Libs */
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import Navbar from '../components/utility/navbar/index';
import Hero from '../components/section/hero/index';
import Projects from '../components/section/projects';
import About from '../components/section/about';
import Contact from '../components/section/contact';

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home({ setTheme }) {
  return (
    <>
      <Head>
        <title>April Tao</title>
      </Head>
      <Navbar setTheme={setTheme} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
