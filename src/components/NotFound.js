//Not Found component to be used when search query does not match any results
import React from 'react';

const NotFound = () => {
	return (
		<div className="not-found">
			<ul>
				<li className="not-found">
				  <h3>No Results Found</h3>
				  <p>Your search did not return any results. Please try again.</p>
				</li>
			</ul>
		</div>
	)
}

export default NotFound;
