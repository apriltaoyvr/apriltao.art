import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
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
            <OptionWrapper>
              {Object.entries(countryCodes)
                .filter(([key]) => key !== router.locale)
                .map(([key, value]) => (
                  <Link href={`/`} key={key} locale={key} passHref>
                    <Flag countryCode={value} height='25' onClick={closeMenu} />
                  </Link>
                ))}
            </OptionWrapper>
            <Divider />
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
