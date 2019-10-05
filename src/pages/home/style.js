import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  justify-items: flex-start;
  @media screen and (max-width: 614px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }
  > div {
    color: black;
    display: flex;
    max-width: 250px;
    flex-direction: column;
    text-align: left;
    background: #fff;
    background-clip: padding-box;
    border: 5px solid transparent;
    padding: 20px;
    border-radius: 15px;
    @media screen and (max-width: 804px) {
      max-width: 280px;
      border-width: 10px;
      border-radius: 20px;
    }

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
      color: white;
      :hover {
        cursor: pointer;
      }
      > div {
        padding: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
        :hover {
          cursor: default;
        }
        svg {
          padding-right: 5px;
        }
      }
      span {
        margin: 0 auto;
      }
    }
  }
`;
