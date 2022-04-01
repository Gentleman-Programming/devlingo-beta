import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ea1889;
  border-radius: 50px;
  border: none;
  color: #ffffff;
  width: 300px;
  height: 3em;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 1%;
  &:hover {
    background-color: #181818;
    color: #ea1889;
    border: 5px solid #ea1889;
  }
`;

export default Button;
