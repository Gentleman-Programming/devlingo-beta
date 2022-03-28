import styled from 'styled-components';

export const Circle = styled.div`
  width: ${({ width }: any) => width};
  height: ${({ heigth }: any) => heigth};
  border-radius: 50%;
  position: ${({ position }: any) => (!position ? 'relative' : 'absolute')};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #ea1889;
  left: ${({ left }: any) => left};
  top: ${({ top }: any) => top};
  color: #ffffff;
`;

export default Circle;
