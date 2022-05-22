/* Libs */
import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

/* Components */
import Modal from './Modal';
import ThemeItem from './ThemeItem';
import {
  WindowIcon,
  ContentWrapper,
  ThemeGrid,
} from './Toggle.styled';
import { StyledIcon } from '../Navbar.styled';

/* Themes */
import {
  dracula,
  pink,
  nordDark
} from '../../../styles/Themes';

const ThemeToggle = ({ setTheme }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };

  const open = () => {
    setModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => (modalOpen ? close() : open())}
        >
          <StyledIcon icon='fa-solid fa-palette' size='xl' />
        </motion.div>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} key='modal'>
            <ContentWrapper>
              <motion.div
                whileTap={{ scale: 0.95 }}
                onClick={() => (modalOpen ? close() : open())}
              >
                <WindowIcon
                  icon='fa-solid fa-x'
                  size='xl'
                  onClick={() => (modalOpen ? close() : open())}
                  style={{ alignSelf: 'flex-start' }}
                />
              </motion.div>

              <h4>Theme</h4>
              <p style={{ userSelect: 'none' }}>⠀⠀</p>
            </ContentWrapper>
            <ThemeGrid>
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(250, 100%, 75%)' }}
                setTheme={setTheme}
                color={dracula}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(193, 43%, 67%)' }}
                setTheme={setTheme}
                color={nordDark}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(14, 50%, 75%)' }}
                setTheme={setTheme}
                color={pink}
              />
            </ThemeGrid>
          </Modal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default ThemeToggle;
