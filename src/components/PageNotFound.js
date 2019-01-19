//PageNotFound component with link back to home page, to be used when route does'nt match any existing pages
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className="not-found">
			<ul>
				<li className="not-found">
				  <h3>Page not found</h3>
				  <p>Route does not match any results. Please return to Gallery App and use the Search function to find what you are looking for.</p>
				  <p><Link to='/'>Gallery App</Link></p>
				</li>
			</ul>

		</div>
	)
}


export default Error;
