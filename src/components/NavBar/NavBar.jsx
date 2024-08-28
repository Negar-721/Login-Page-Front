import React from 'react';
import './NavBar.css';
import { GiTreeBranch } from "react-icons/gi";

const NavBar = () => {
    return (
        <div className="NavBar">
            <GiTreeBranch className={"icon"}/>
            <button>Free Trial</button>
        </div>
    );
};
export default NavBar;