/* Libs */
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faBehance);

/* Components */
import Navbar from '../components/utility/navbar/Navbar';
import Hero from '../components/section/hero/Hero';
import Work from '../components/section/work/Work'
import About from '../components/section/about/About'
import Contact from '../components/section/Contact/Contact'

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
        <meta name="description" content="Web design, development, and modelling" />
      </Head>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact/>
    </>
  )
}
