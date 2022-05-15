import styled from 'styled-components';
import { CircleFlag } from 'react-circle-flags';

export const LangWrapper = styled.div`
  display: flex;
`;

export const OptionWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Flag = styled(CircleFlag)`
  align-self: center;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-left: 1px solid var(--disabled);
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease-out;
`;
