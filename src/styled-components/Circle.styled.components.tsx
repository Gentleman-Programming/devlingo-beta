import styled, { CSSProperties } from 'styled-components';

const size = '1029px';
const device = `(max-width: ${size})`;

export const Circle = styled.div`
  width: ${({ width }: CSSProperties) => width};
  height: ${({ heigth }: any) => heigth};
  left: ${({ left }: CSSProperties) => left};
  top: ${({ top }: CSSProperties) => top};
  padding-left: ${({ paddingLeft }: CSSProperties) => paddingLeft};
  position: relative;
  display: flex;
  border-radius: 50%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.8em;
  line-height: 58px;
  z-index: 0;
  align-items: center;
  justify-content: center;
  background-color: #ea1889;
  color: #ffffff;
  @media ${device} {
    display: none;
  }
`;

export default Circle;
