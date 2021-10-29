import { breakpoints } from '@styles/theme/global';
import styled from 'styled-components';

interface ContainerProps {
  height?: string;
  backgroundColor?: string;
}

const MainContainer: React.FC<ContainerProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <MainContainer_ backgroundColor={backgroundColor}>
      <ContainerContent>{children}</ContainerContent>
    </MainContainer_>
  );
};

export default MainContainer;

// Section Container

const MainContainer_ = styled.section<ContainerProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : 'inherit')};
  padding: 0 1rem;
  overflow: hidden;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'inherit'};

  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5.75rem;
  }

  @media only screen and (min-width: ${breakpoints.md}px) {
    padding: 0 10rem;
  }

  @media only screen and (min-width: ${breakpoints.lg}px) {
    padding: 0 12.5rem;
  }
`;

// Container content

const ContainerContent = styled.div`
  width: 100%;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    max-width: 584px;
  }

  @media only screen and (min-width: ${breakpoints.md}px) {
    max-width: 840px;
  }

  @media only screen and (min-width: ${breakpoints.lg}px) {
    max-width: 1040px;
  }
`;
