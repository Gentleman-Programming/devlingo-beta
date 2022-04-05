import styled from 'styled-components';
const size = '1029px';
const device = `(max-width: ${size})`;
export const Form = styled.form`
  margin-right: 5%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Inter', sans-serif;
  @media ${device} {
    margin-right: 0;
  }
`;

export default Form;
