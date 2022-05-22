import { StyledModal } from './Toggle.styled';
import Backdrop from './Backdrop';

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '-25%'}}
        animate={{ y: '0'}}
        exit={{ y: '25%'}}
      >
        {children}
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
