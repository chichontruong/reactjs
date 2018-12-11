import React, { Component } from 'react'
import {Route, Link} from "react-router-dom";
import {Menus} from './Menus';

const MenuLink = ({label, to, isExact}) => {
    return(
        <Route
            path={to} exact = {isExact} children={({match})=>{
                var active = match ? "active" : "";
                return(
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    );
}

class NavMenu extends Component {
    render() {
        var showMenu = (menus) => {
            menus = menus.filter(item=>item.label !== null && item.path != null);
            var result = null;
            if(menus.length > 0){
                result = menus.map((item, index) => {
                    return (
                        <MenuLink key={index} label={item.label} to={item.path} isExact={item.exact}/>
                    );
                })
            }
            return result;
        }

        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {showMenu(Menus)}
                </ul>
            </nav>
        );
    }
}

export default NavMenu; 