import { StyledModal } from '../index.styled';
import Backdrop from './Backdrop';

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '-25%' }}
        animate={{ y: '0' }}
        exit={{ y: '25%' }}
        transition={{ type: 'spring', stiffness: 200, duration: 0.5 }}
      >
        {children}
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
