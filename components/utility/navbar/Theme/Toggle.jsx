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
  ThemeIcon,
} from './Toggle.styled';
import { StyledIcon } from '../Navbar.styled';

/* Themes */
import {
  red,
  purple,
  blue,
  green,
  orange,
  pink,
  yellow,
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

              <h6>Theme</h6>
              <p style={{ userSelect: 'none' }}>⠀⠀</p>
            </ContentWrapper>
            <ThemeGrid>
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(10, 100%, 75%)' }}
                setTheme={setTheme}
                color={red}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(35, 100%, 75%)' }}
                setTheme={setTheme}
                color={orange}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(60, 100%, 75%)' }}
                setTheme={setTheme}
                color={yellow}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(115, 100%, 75%)' }}
                setTheme={setTheme}
                color={green}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(170, 100%, 75%)' }}
                setTheme={setTheme}
                color={blue}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(250, 100%, 75%)' }}
                setTheme={setTheme}
                color={purple}
              />
              <ThemeItem
                icon='fa-solid fa-circle'
                size='3x'
                style={{ color: 'hsl(330, 100%, 75%)' }}
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
