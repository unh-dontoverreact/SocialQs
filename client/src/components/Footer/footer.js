import React from "react";
import Styled from "styled-components";

const Footer = () => (
    <FooterDiv>
        <div className="bottom">&copy; Copyright 2019 Don't Over React</div>
    </FooterDiv>
);

const FooterDiv = Styled.div `
        width: 100%;
        height:5vw;
        bottom:0;
        margin-bottom:0;
        margin-top: 25px;
        text-align:center;
        background-color: #612469;
        color: white;
        overflow: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        `
        
export default Footer;