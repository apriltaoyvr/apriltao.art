import Link from 'next/link';

import {
  StyledSection,
  AboutWrapper,
  ParagraphWrapper,
  ImageWrapper,
  StyledImage,
  SkillWrapper,
} from './About.styled';
import SkillCard from './SkillCard';

const About = () => {
  return (
    <StyledSection id='about'>
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
      <SkillWrapper>
        <SkillCard skill='NextJS' />
        <SkillCard skill='ReactJS' />
        <SkillCard skill='Styled Components' />
        <SkillCard skill='Sass' />
        <SkillCard skill='Adobe Photoshop' />
        <SkillCard skill='Adobe Premiere' />
      </SkillWrapper>
    </StyledSection>
  );
};

export default About;
