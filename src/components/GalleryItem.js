//Gallery-item component that can be reused to display each list item and image
import React from 'react';

const GalleryItem = props => (
	<li>
	  <img
	  src={props.url}
	  alt={props.title}
	  />
	</li>
);

export default GalleryItem;
