import backg from "../assets/background.svg";

import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    *{
        margin:0;
        border:0;
        box-sizing:border-box;
    }
    html,body,#root{
        height: 100%;

    }
    body{
        background: #191920 url(${backg}) no-repeat top center;
        color:white
    }
`;
