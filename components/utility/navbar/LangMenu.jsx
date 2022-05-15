import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  LangWrapper,
  StyledMenu,
  OptionWrapper,
  Divider,
  Flag,
} from './LangMenu.styled';

const MotionLink = motion(Link, { forwardMotionProps: true });

const countryCodes = {
  en: 'us',
  it: 'it',
  fr: 'fr',
};

const LangMenu = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <LangWrapper>
      {isOpen ? (
        <>
          <StyledMenu>
            <OptionWrapper>
              {Object.entries(countryCodes)
                .filter(([key]) => key !== router.locale)
                .map(([key, value], index) => (
                  <MotionLink
                    href={`/`}
                    locale={key}
                    key={key}
                    passHref
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 * index }}
                  >
                    <Flag countryCode={value} height='25' onClick={closeMenu} />
                  </MotionLink>
                ))}
            </OptionWrapper>
            <Divider
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
          </StyledMenu>
        </>
      ) : (
        ''
      )}
      <OptionWrapper>
        <Flag
          countryCode={`${countryCodes[router.locale]}`}
          height='25'
          onClick={toggleMenu}
        />
      </OptionWrapper>
    </LangWrapper>
  );
};

export default LangMenu;
