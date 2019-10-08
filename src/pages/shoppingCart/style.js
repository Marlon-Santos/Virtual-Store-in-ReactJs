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
    text-align: left;
    vertical-align: top;
    width: 100%;
  }
  td:nth-child(1) > div {
    width: 200px;
  }
  th {
    color: #aaa;
  }
  td:nth-child(2) {
    div {
      display: inline-block;
      strong {
        display: block;
      }
    }
  }
  td:nth-child(3) {
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    input {
      width: 35px;
      text-align: right;
      display: inline-block;
      border: 1px solid #ddd;
      height: 25px;
    }
  }
  img {
    width: 100%;
  }
  footer {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    input {
      appearance: none;
      height: 50px;
      width: 150px;
      background-color: #551a8b;
      border: 2px solid;
      border-radius: 15px;
      color: white;
      font-size: 16px;
      margin-left: 25px;
    }
    div {
      margin-right: 25px;
    }
    span {
      font-size: 16px;
    }
    strong {
      font-size: 22px;
    }
  }
`;
