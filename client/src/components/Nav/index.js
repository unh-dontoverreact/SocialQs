// import React from "react";
// import "./style.css";
// import { Link } from "react-router-dom";

// function Nav() {
//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <ul id="nav-mobile" className="brand-logo center hide-on-med-and-down">
//           <li>
//             <Link to={`/`} activeclassname="material-icons waves-effect">
//               SocialQs
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Nav;

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
    background-color: #612469;
    box-shadow:0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22);
    color:white;
    `
    
export default Nav;