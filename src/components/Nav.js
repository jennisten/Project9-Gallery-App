//add Navigation component - this is the navigation menu
import React from 'react';
import { NavLink } from 'react-router-dom';

const myLinks = ['pinguin', 'polar', 'glacier'];

const Nav = (props) => {
	let links = myLinks.map((link) => {
		return (
			 <li className='links'><NavLink to={link} onClick={() => {props.onSearch(link)}} >{link}</NavLink></li>
		)
	})

	return(
		<div>
			<nav className="main-nav">
			  <ul>
			  {links}
			  </ul>
		  </nav>
	  </div>
	)
}

export default Nav;
