import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('common');

  return (
    <StyledSection id='about'>
      <h1>{t('about.title')}</h1>
      <AboutWrapper>
        <ParagraphWrapper>
          {t('about.bio', { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index}>{paragraph}</p>
            )
          )}
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
      <h2>{t('about.skills')}</h2>
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
