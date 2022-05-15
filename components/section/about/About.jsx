import {
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  StyledImage,
} from './About.styled';
import Link from 'next/link';

const About = () => {
  return (
    <section id='about'>
      <h1>About Me</h1>
      <AboutWrapper>
        <ParagraphWrapper>
          <p>
            A web <span> developer</span> and <span>designer</span> attending
            the graphic design program of{' '}
            <Link href='https://www.lisaa.com'>LISAA</Link> in Paris, France.
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
            src='https://res.cloudinary.com/dsbhmynmq/image/upload/v1652577967/April%20Tao/Images/me_erdq0n.png'
            width={400}
            height={600}
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
