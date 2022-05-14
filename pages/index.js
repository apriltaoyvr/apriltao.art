/* Libs */
import Head from 'next/head'
import React, { Suspense, useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  return !isLoading ? (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
    </>

  ) : (< Loading />
  )
}
