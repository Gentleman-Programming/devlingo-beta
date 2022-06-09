import styled from 'styled-components';

export const Button = styled.button<{ primary?: string }>`
  width: 18rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5vw 0;
  border-radius: 1vw;
  transition: all 0.5s ease 0s;
  box-shadow: 0 1vw #a11360;
  text-transform: uppercase;
  font-size: 3vmin;
  border: 0.3vw solid #ea1889;

  background-color: ${(props: any) => (props.primary ? '#EA1889' : '#181818;')};
  color: ${(props: any) => (props.primary ? '#fff' : '#EA1889')};

  &:active {
    box-shadow: 0 5px #a11360;
    transform: translateY(5px);
  }
`;

export default Button;
