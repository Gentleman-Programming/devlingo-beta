import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ea1889;
  border-radius: 3rem;
  border: none;
  color: #ffffff;
  width: 18rem;
  height: 5rem;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 1%;
  &:hover {
    background-color: #181818;
    color: #ea1889;
    border: 0.4rem solid #ea1889;
  }
`;

export default Button;
