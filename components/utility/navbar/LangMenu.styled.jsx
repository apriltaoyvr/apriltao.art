import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';

export const LangWrapper = styled.div`
  display: flex;
`;

export const OptionWrapper = styled.div`
  display: flex;
`;

export const Flag = styled(CircleFlag)`
  align-self: center;
  background: transparent;
  padding-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-left: 1px solid var(--disabled);
  box-shadow: 0px 0px 2px rgba(244, 205, 221, 0.25);
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  transition: all 0.3s ease-out;
`;
