import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => (
    <NavBar>
        <h5><Link to={`/`}>
               SocialQs
             </Link></h5>
    </NavBar>
);

const NavBar = Styled.div `
    width: 100%;
    position:sticky;
    top:0;
    display:grid;
    justify-items: center;
    background-image: radial-gradient(circle, #330C3F, #612469, #757083);
    box-shadow:0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22);
    // color: #F5F5F5;
    a {
        color: white;
    }
    z-index: +6;
    `
    
export default Nav;