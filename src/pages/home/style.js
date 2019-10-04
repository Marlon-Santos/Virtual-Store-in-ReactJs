import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  justify-items: flex-start;
  > div {
    color: black;
    display: flex;
    width: 33.33%;
    /* max-width: 250px; */
    flex-direction: column;
    text-align: left;
    background: #fff;
    background-clip: padding-box;
    border: 5px solid transparent;
    padding: 10px;
    img {
      width: 100%;
    }
    > strong {
      margin-bottom: 10px;
    }
    > button {
      display: flex;
      margin-top: auto;
      background-color: #7159c1;
      align-items: center;

      > div {
        padding: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
        margin-right: 5px;
      }
    }
  }
`;
