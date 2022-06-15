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
      <a href={href} passHref>
        <FontAwesomeIcon icon={icon} size='3x' />
      </a>
    </IconWrapper>
  );
};

export default IconLink;
