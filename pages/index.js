/* Libs */
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
        <link rel="icon" href="" />
      </Head>
    </>
  )
}
