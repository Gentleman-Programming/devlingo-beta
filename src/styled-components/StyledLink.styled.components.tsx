import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(Link)`
  color: #ffffff;
  margin-bottom: 15px;
  margin-left: 85px;
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
