import {
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  StyledImage,
} from './About.styled';

const About = () => {
  return (
    <section>
      <h1>About Me</h1>
      <AboutWrapper>
        <ParagraphWrapper>
          <p>
            A web developer and designer attending the graphic design program of
            LISAA (L\&#39Institut Supérieur des Arts Appliqués) in Paris, France.
          </p>
          <p>
            Born and raised in Vancouver, Canada with an interest in visual
            beauty.
          </p>
          <p>
            My hobbies include dance, yoga, poetry, and the finer things in
            life. And I hold a great love for pigeons, cats, rats, and
            capybaras.
          </p>
        </ParagraphWrapper>
        <ImageWrapper>
          <StyledImage
            src='https://res.cloudinary.com/dsbhmynmq/image/upload/v1652506175/April%20Tao/Images/_R281949_xfjj2v.jpg'
            width={314}
            height={419}
            alt='A photo of myself'
          />
        </ImageWrapper>
      </AboutWrapper>
      <h2>Skills</h2>
      <ul>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Styled Components</li>
        <li>Sass</li>
        <li>Figma</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Premiere</li>
      </ul>
    </section>
  );
};

export default About;
