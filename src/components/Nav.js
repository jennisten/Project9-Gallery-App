//Navigation component for each navigation link
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
	return(
		<span>
  			<li className="link"><NavLink to={`/search/${props.link}`} onClick={ () => {props.onSearch(props.link)}}>{props.link}</NavLink></li>
		</span>
	)
}

export default Nav;
