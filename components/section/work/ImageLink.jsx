import Link from 'next/link';
import Image from 'next/image';
import { StyledLink } from './Work.styled';
import { slideItem } from '../../utility/framer';

const ImageLink = ({ href, image, alt, title }) => {
  return (
    <StyledLink
      variants={slideItem}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={href} passHref>
        <Image src={image} alt={alt} width={1000} height={550} />
      </Link>
    </StyledLink>
  );
};

export default ImageLink;
