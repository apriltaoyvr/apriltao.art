import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeItem } from '../../utility/framer';

const ContactIcon = ({ href, icon }) => {
  return (
    <motion.div variants={fadeItem}>
      <Link href={href} icon={icon} passHref>
        <FontAwesomeIcon icon={`fa-brands fa-${icon}`} size='3x' />
      </Link>
    </motion.div>
  );
}

export default ContactIcon;