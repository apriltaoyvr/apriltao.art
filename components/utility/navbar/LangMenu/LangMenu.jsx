import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { langContainer, langChild } from '../../../utility/framer';

import {
  LangWrapper,
  StyledMenu,
  OptionWrapper,
  Divider,
  Flag,
} from './LangMenu.styled';

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
            <OptionWrapper
              variants={langContainer}
              initial='hidden'
              whileInView='visible'
            >
              {Object.entries(countryCodes)
                .filter(([key]) => key !== router.locale)
                .map(([key, value], index) => (
                  <Link href={`/`} locale={key} key={key} passHref>
                    <motion.div variants={langChild}>
                      <Flag
                        countryCode={value}
                        height='25'
                        onClick={closeMenu}
                      />
                    </motion.div>
                  </Link>
                ))}
            </OptionWrapper>
            <Divider
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
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
          delay={`0s`}
        />
      </OptionWrapper>
    </LangWrapper>
  );
};

export default LangMenu;
