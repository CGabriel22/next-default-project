import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Example_ = styled.div<Props>`
  color: ${({ color }) => color};
`;
