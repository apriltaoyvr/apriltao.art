import Link from 'next/link';
import { StyledLink } from './Work.styled';
import { slideItem } from '../../utility/framer';

const VideoLink = ({ href, video }) => {
  return (
    <StyledLink variants={slideItem}>
      <Link href={href} passHref>
        <video src={video} autoPlay muted loop></video>
      </Link>
    </StyledLink>
  );
};

export default VideoLink;
