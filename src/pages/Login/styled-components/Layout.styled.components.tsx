import styled from 'styled-components';

export const Layout = styled.div<{ flex?: string }>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  background-color: #181818;
  flex-direction: ${props => props.flex ? props.flex : "row"};
`;

export default Layout;
