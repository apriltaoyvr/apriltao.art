import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'
import { LinkWrapper } from './index.styled';
import { slideItem } from '../../utility/framer';

const ProjectLink = ({ href, src, video, alt }) => {
  return (
    <LinkWrapper variants={slideItem}>
      {video ? (
        <Link href={href} passHref>
          <motion.video
            src={src}
            muted
            loop
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          />
        </Link>
      ) : (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
          <Link href={href} passHref>
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={550}
              sizes='50vw'
              layout='responsive'
            />
          </Link>
        </motion.div>
      )}
    </LinkWrapper>
  );
};

export default ProjectLink;
