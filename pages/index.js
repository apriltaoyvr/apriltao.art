/* Libs */
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import Hero from '../components/hero/Hero';
import About from '../components/about/About'

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
      <Hero/>
      <About/>
    </>
  )
}
