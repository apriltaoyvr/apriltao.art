import { motion } from 'framer-motion';
import Image from 'next/image';
import { LinkWrapper } from './Projects.styled.';
import { slideItem } from '../../utility/framer';

const ProjectLink = ({ href, src, video, alt }) => {
  return (
    <LinkWrapper variants={slideItem}>
      <motion.a href={href} passHref>
        {video ? (
          <motion.video
            src={src}
            autoPlay
            muted
            loop
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          />
        ) : (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={550}
              sizes='50vw'
              layout='responsive'
            />
          </motion.div>
        )}
      </motion.a>
    </LinkWrapper>
  );
};

export default ProjectLink;
