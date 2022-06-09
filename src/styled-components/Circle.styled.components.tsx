import styled, { CSSProperties } from 'styled-components';

const size = '1029px';
const device = `(max-width: ${size})`;

export const Circle = styled.div`
  width: ${({ width }: CSSProperties) => width};
  height: ${({ height }: CSSProperties) => height};
  left: ${({ left }: CSSProperties) => left};
  right: ${({ right }: CSSProperties) => right};
  top: ${({ top }: CSSProperties) => top};
  padding-left: ${({ paddingLeft }: CSSProperties) => paddingLeft};
  padding-right: ${({ paddingRight }: CSSProperties) => paddingRight};
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8em;
  line-height: 2em;
  align-items: center;
  justify-content: center;
  background-color: #ea1889;
  color: #ffffff;

  h2 {
    width: 75%;
    text-align: center;
    font-size: 4vw;
    line-height: 4vw;
  }
  @media ${device} {
    display: none;
  }
`;

export default Circle;
