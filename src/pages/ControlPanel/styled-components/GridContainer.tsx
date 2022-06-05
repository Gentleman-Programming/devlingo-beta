import styled from 'styled-components';

export const GridContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #181818;
  display: grid;
  gap: 34px 14px;  
  grid-template:
    'aside  aside  header header' 12.8vmin
    'aside  aside  main   main'   auto /
     20vmin 20vmin auto   auto;
`;
export default GridContainer;
