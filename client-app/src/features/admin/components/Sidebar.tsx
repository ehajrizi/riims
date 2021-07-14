import React, { useEffect } from "react";
import cn from 'classnames';
import { Link, NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import Main from "./Main";

export default function Sidebar(props: any) 
{
    const classes = cn(
        'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating',
        {'visible': props.toggleMenu}
    );

    return(
        <>
            <div className={classes}>
                <ul>
                    <li className='item link'>
                        <NavLink to='/adminDashboard/statistics'>Statistics</NavLink>
                    </li>
                    <li className='item link'>
                        <NavLink to='/adminDashboard/users'>Users</NavLink>
                    </li>
                    <li className='item link'>Item 3 </li>
                    <li className='item link'>Item 4 </li>
                </ul>
            </div>
        </>
    )
}