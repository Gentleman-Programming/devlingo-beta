import styled from 'styled-components';

export const Button = styled.button<{ primary?: string }>`
  font-size: inherit;
  font-weight: bold;
  text-decoration-line: none;
  padding: 0.5ch 1ch;
  border-radius: 0.5ch;
  box-shadow: 0 1ch #a11360;
  /* text-transform: uppercase; */
  border: 0.3ch solid #ea1889;
  background-color: ${(props) => (!props.primary ? '#EA1889' : '#181818;')};
  color: ${(props) => (!props.primary ? '#fff' : '#EA1889')};
  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;
