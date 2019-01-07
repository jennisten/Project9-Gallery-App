import React from 'react';
import Nav from './Nav';
import Form from './Form';

const Header = (props) => {
	return (
		<header>
			<Form
			onSearch={props.onSearch}
			/>
			<Nav
			onSearch={props.onSearch}
			/>
		</header>
	)
};


export default Header;
