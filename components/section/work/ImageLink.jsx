import Image from 'next/image';
import { LinkWrapper } from './Work.styled';
import { slideItem } from '../../utility/framer';

const ImageLink = ({ href, image, alt, title }) => {
  return (
    <LinkWrapper
      variants={slideItem}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href={href} passHref target='_blank' rel='noreferrer'>
        <Image src={image} alt={alt} width={1000} height={550} />
      </a>
    </LinkWrapper>
  );
};

export default ImageLink;
