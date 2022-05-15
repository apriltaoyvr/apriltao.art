import Link from 'next/link';
import { StyledVideo } from './Work.styled';

const VideoLink = ({ href, video }) => {
  return (
    <StyledVideo>
      <Link href={href} passHref>
        <video src={video} autoPlay muted loop></video>
      </Link>
    </StyledVideo>
  );
};

export default VideoLink;
