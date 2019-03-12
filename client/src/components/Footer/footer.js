import React from "react";
import Styled from "styled-components";

const Footer = () => (
    <FooterDiv>
        <div className="bottom">&copy; Copyright 2019 - Don't Over React
        {/* <img src="../public/assets/images/logo.jpg" alt="Don't Over React" />  */}
         </div>
    </FooterDiv>
);

const FooterDiv = Styled.div `
        width: 100%;
        height:5vw;
        bottom:0;
        margin-bottom:0;
        margin-top: 25px;
        text-align:center;
        background-image: radial-gradient(circle, #330C3F, #612469, #757083);
        color: white;
        overflow: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        `
        
export default Footer;