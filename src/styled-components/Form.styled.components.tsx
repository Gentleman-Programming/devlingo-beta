import styled, { css } from 'styled-components';
const size = '1029px';
const device = `(max-width: ${size})`;

export const Form = styled.form<{ left?: string; right?: string }>`
  height: 80%;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Inter', sans-serif;
  ${(props) =>
    props.left &&
    css`
      margin-left: 5%;
    `}
  ${(props) =>
    props.right &&
    css`
      margin-right: 5%;
    `}
  @media ${device} {
    margin-right: 0;
    width: 80vw;
  }
`;

export default Form;
