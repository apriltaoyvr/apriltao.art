import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/* next-i18next */
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default ProjectsIndex;