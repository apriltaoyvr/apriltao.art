import { LinkWrapper } from './Work.styled';
import { slideItem } from '../../utility/framer';
import { motion } from 'framer-motion';

const VideoLink = ({ href, video }) => {
  return (
    <LinkWrapper variants={slideItem}>
      <a href={href} passHref>
        <motion.video
          src={video}
          autoPlay
          muted
          loop
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        />
      </a>
    </LinkWrapper>
  );
};

export default VideoLink;
