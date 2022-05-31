import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { StyledModal, WindowBar, WindowIcon, StyledH3 } from './index.styled';
import Backdrop from './Backdrop';

const Modal = ({ modalOpen, handleClose, title, children }) => {
  return (
    <MotionConfig>
      <AnimatePresence>
        {modalOpen && (
          <Backdrop onClick={handleClose}>
            <StyledModal
              onClick={(e) => e.stopPropagation()}
              initial={{ y: '-75%', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              exit={{ y: '75%', opacity: 0 }}
              transition={{ type: 'spring', bounciness: 0, duration: 0.66 }}
            >
              <WindowBar>
                <motion.div whileTap={{ scale: 0.95 }} onClick={handleClose}>
                  <WindowIcon icon='fa-solid fa-x' size='xl' />
                </motion.div>
                <StyledH3>{title}</StyledH3>
                <p style={{ userSelect: 'none' }}>⠀⠀</p>
              </WindowBar>
              {children}
            </StyledModal>
          </Backdrop>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Modal;
