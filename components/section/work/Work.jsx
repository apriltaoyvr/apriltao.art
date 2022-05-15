import VideoLink from './VideoLink';
import { WorkWrapper, ProjectWrapper } from './Work.styled';

const Projects = () => {
  return (
    <WorkWrapper id='projects'>
      <hgroup>
        <h1>Projects</h1>
        <h2>Web Design and Development</h2>
      </hgroup>
      <ProjectWrapper>
        <VideoLink
          href='https://www.ambrosialab.it'
          video='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
        />
        <VideoLink
          href='https://www.theripper93.com'
          video='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570268/April%20Tao/Projects/theripper93/2022-05-14_16-15-31_bdlkkc.mp4'
        />
      </ProjectWrapper>
    </WorkWrapper>
  );
};

export default Projects;
