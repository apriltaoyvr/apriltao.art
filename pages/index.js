/* Libs */
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faBehance, faBars, faX);


/* Components */
import Navbar from '../components/utility/navbar/Navbar';
import Hero from '../components/section/hero/Hero';
import Projects from '../components/section/projects/Projects'
import About from '../components/section/about/About'
import Contact from '../components/section/contact/Contact'

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>April Tao</title>
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
