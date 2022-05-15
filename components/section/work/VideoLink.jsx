import Link from 'next/link';
import { StyledLink } from './Work.styled';

const VideoLink = ({ href, video }) => {
  return (
    <StyledLink>
      <Link href={href} passHref>
        <video src={video} autoPlay muted loop></video>
      </Link>
    </StyledLink>
  );
};

export default VideoLink;
