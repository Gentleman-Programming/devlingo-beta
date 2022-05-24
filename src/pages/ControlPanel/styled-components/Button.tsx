import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  margin-bottom: 15px;
  padding: 1.6vmin;
  border: none;
  border-radius: 12px;
  font-size: 2.56vmin;
  font-weight: bolder;
  color: white;
  background-color: #ea1889;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #a21360;
  }
`;
