import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex: 1;
  background-color: pink;
  background-color: white;
  color: black;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
  padding: 25px;
  align-items: flex-start;
  table {
    text-align: center;
    width: calc(100% - 200px);
    th {
      padding-bottom: 60px;
    }
    th {
      color: #999;
      margin-bottom: 50px;
    }
  }
  > div {
    width: 200px;
    background-color: red;
  }
  input {
    width: 100%;
  }
  img {
    width: 100%;
  }
  footer {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
`;
