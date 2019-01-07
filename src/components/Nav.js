//add Navigation component - this is the navigation menu
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
	return (
		<div>
			<nav className="main-nav">
			  <ul>
				  <li><NavLink to='/?search=nature' onClick={() => {props.onSearch('Nature')}} >Nature</NavLink></li>
				  <li><NavLink to='/?search=wildLife' onClick={() => {props.onSearch('WildLife')}} >Wildlife</NavLink></li>
				  <li><NavLink to='/?search=arctic' onClick={() => {props.onSearch('Arctic')}} >Arctic</NavLink></li>
			  </ul>
			</nav>
		</div>
	)
}

export default Nav;
