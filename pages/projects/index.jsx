import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Projects from '../../components/home/projects';

const ProjectsPage = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
