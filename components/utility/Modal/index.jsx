import { StyledModal } from './index.styled';
import Backdrop from './/Backdrop';

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '-75%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        exit={{ y: '75%', opacity: 0 }}
        transition={{ type: 'spring', bounciness: 0, duration: 0.66}}
      >
        {children}
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
