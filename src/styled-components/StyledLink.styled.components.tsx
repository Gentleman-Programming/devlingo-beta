import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(Link)`
  color: #ffffff;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Inter';
  font-style: normal;
  &:hover {
    text-decoration: underline;
  }
`;
export default StyledLink;
