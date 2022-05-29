import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadeItem } from '../framer';

import { IconWrapper } from './index.styled';

const IconLink = ({ href, icon }) => {
  return (
    <IconWrapper
      variants={fadeItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={href} passHref>
        <FontAwesomeIcon icon={icon} size='3x' />
      </Link>
    </IconWrapper>
  );
};

export default IconLink;
