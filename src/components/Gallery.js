//Gallery component that can be reused to display images for navigation links and search form
import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound'

const Gallery = props => {
	//add the individual gallery items as components
	const results = props.data;
	let images;
	if (results.length > 0) {
		//map through data array to create image items  and use item index value to set individual key
		images = results.map((image, index) => <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={index} /> );
	}  else {
		images = <NotFound />
	}

	return (
		<div className="photo-container">
          <h2>{props.query}</h2>
          <ul>
            {images}
          </ul>
        </div>
	)
}


export default Gallery;
