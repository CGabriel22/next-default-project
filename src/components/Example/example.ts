import { breakpoints } from '@styles/theme/global';
import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Example_ = styled.div<Props>`
  color: ${({ color }) => color};

  @media screen and (min-width: ${breakpoints.md}px) {
    color: #000;
  }
`;
