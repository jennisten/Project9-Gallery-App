//create a single Gallery-item component that can be reused with iteration to display each list item and image.
import React from 'react';

const GalleryItem = props => (
	<li>
	  <img
	  src={props.url}
	  alt=""/>
	</li>
);

export default GalleryItem;
