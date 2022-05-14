/* Libs */
import Head from 'next/head'
import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* Components */
import Loading from '../components/utility/loading/Loading';
import Navbar from '../components/utility/navbar/Navbar';
import Hero from '../components/section/hero/Hero';
import Work from '../components/section/work/Work'
import About from '../components/section/about/About'

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
      <Suspense fallback={<Loading/>}>
        <Navbar/>
        <Hero/>
        <Work/>
        <About />
      </Suspense>
    </>
  )
}
