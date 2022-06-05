import styled from 'styled-components';

export const Header = styled.header`
  grid-area: header;
  background-color: #181818;
  color: white;
  box-shadow: 0 0.5px 0 0 #ea1889, 0 1px 0 0 #a21360;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
