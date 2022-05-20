import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkWrapper } from './Projects.styled.';
import { slideItem } from '../../utility/framer';

const ProjectLink = ({ href, src, video, alt }) => {
  return (
    <LinkWrapper variants={slideItem}>
      <a href={href} passHref>
        {video ? (
          <motion.video
            src={src}
            autoPlay
            muted
            loop
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          />
        ) : (
          <Image src={src} alt={alt} width={1000} height={550} />
        )}
      </a>
    </LinkWrapper>
  );
};

export default ProjectLink;
