import styled from 'styled-components';

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 80%;
  justify-content: center;
  gap: 1rem;
`;

const Projects = () => {
  return (
    <WorkWrapper id='projects'>
      <hgroup>
        <h1>Projects</h1>
        <h2>Web Design and Development</h2>
      </hgroup>
      <ProjectWrapper>
        <video
          src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570265/April%20Tao/Projects/AmbrosiaLab/2022-05-14_16-16-35_skywsw.mp4'
          autoPlay
          muted
          loop
        ></video>
        <video
          src='https://res.cloudinary.com/dsbhmynmq/video/upload/v1652570268/April%20Tao/Projects/theripper93/2022-05-14_16-15-31_bdlkkc.mp4'
          autoPlay
          muted
          loop
        ></video>
      </ProjectWrapper>
    </WorkWrapper>
  );
};

export default Projects;
