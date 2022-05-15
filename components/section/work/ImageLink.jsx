import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { StyledLink } from './Work.styled';

const ImageLink = ({ href, image, alt, title }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <StyledLink >
        <Link href={href} passHref>
          <Image
            src={image}
            alt={alt}
            width={1000}
            height={550}
            layout='responsive'
          ></Image>
        </Link>
    </StyledLink>
  );
};

export default ImageLink;
