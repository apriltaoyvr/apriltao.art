import styled from 'styled-components';
import Link from 'next/link';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 3;
  transition: 0.2s ease-in-out;

  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  background: hsla(234, 14%, 13%, 0.5);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid var(--disabled);

  &:hover {
    border-color: var(--accent);
  }
`;

export const Tabs = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 1rem;
  gap: 1rem;
`;

export const Tab = styled.li`
  padding: 0;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:after {
    background: transparent;
    bottom: -1px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
    transform: scaleX(0.75);
    transition: all 0.2s ease-in-out;
    width: 100%;
  }

  & a {
    color: var(--disabled);
  }

  &:hover a {
    color: var(--accent);
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s ease-in-out;
`;
