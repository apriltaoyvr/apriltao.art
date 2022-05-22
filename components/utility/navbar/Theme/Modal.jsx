import { StyledModal } from './Toggle.styled';
import Backdrop from './Backdrop';

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '-50vh', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        exit={{ y: '80vh', opacity: 0 }}
      >
        {children}
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
