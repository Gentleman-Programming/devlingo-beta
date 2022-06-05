import styled from 'styled-components';

interface IProps {
  maxWidth?: string;
}

export const Wrapper = styled.div<IProps>`
  max-width: 90%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 100%;
  margin: 0 auto;
`;
