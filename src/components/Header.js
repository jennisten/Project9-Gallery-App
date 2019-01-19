//Header component that handles the search form, navigation links and gallery data, and passes down state as props from parent to children components
import React from 'react';
import Nav from './Nav';
import Form from './Form';
import Gallery from './Gallery';
import Loading from './Loading';

const Header = (props) => {
	//create navigation links from props links data, map through data array to create links and use item index value to set individual key
	let links = props.links.map((link, index) =>
		<Nav onSearch={props.onSearch} key={index} link={link} />
	)

	return (
		<header>
			<h1>Gallery App</h1>
			<Form
			onSearch={props.onSearch}
			/>
			<nav className="main-nav">
  				<ul>
					{links}
  				</ul>
			</nav>
			{
				//show Loading component while data is loading using the loading state
  				(props.loading)
	  			? <Loading />
	  			: <Gallery data={props.data} query={props.query} error={props.error} />
			}
		</header>
	)
};


export default Header;
