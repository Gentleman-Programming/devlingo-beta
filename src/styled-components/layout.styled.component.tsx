import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #181818;
  color: white;
`;

export const NavbarL = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: transparent;
  color: white;
  position: fixed;
  top: 0;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  padding-right: 20px;
  border-radius: 4px;
  max-width: 1440px;
`;

export const Heading = styled.div`
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;
  color: #212529;
  margin: 0;
  border-radius: 4px;
  padding: 20px 0 20px 20px;
  max-height: 85px;
`;

export const MainContainer = styled.div`
  background-color: white;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 20px 20px;
  border-radius: 4px;
  min-width: 794px;
  height: 100%;
`;

export const AppContainer = styled.div`
  justify-content: center;
  background-color: #f4f5ff;
  display: flex;
  flex-direction: column;
`;

export const PreloaderStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
`;

export const ImagePreloader = styled.img`
  width: 30vw;
`;