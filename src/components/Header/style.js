import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
`;

export const Cart = styled(Link)`
  display: flex;
  text-align: right;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: 300ms;
  :hover {
    opacity: 0.6;
  }
  div:first-child {
    margin-right: 5px;
  }
  small {
    color: #999;
    display: block;
  }
`;
