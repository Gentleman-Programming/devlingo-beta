import styled from 'styled-components';

export const Aside = styled.aside`
  grid-area: aside;
  background-color: #181818;
  color: white;
  box-shadow:
    0 0 0 6px #ea1889,
    0 0 0 10px #a21360;
  padding-top: 16px;
  text-align: center;
`;

export const AsideContainer = styled.div`
  height: auto;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
