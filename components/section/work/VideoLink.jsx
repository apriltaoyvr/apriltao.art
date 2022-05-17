import Link from 'next/link';
import { StyledLink } from './Work.styled';
import { slideItem } from '../../utility/framer';
import { motion } from 'framer-motion';

const VideoLink = ({ href, video }) => {
  return (
    <StyledLink variants={slideItem}>
      <Link href={href} passHref>
        <motion.video
          src={video}
          autoPlay
          muted
          loop
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        ></motion.video>
      </Link>
    </StyledLink>
  );
};

export default VideoLink;
