//A single Gallery component that can be reused to display the sets of images for each of the three topic categories you wish to display, like sunsets, waterfalls and rainbows, for example.
import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound'

const Gallery = props => {
//	here add the individual gallery items as components
	const results = props.data;
	let images;
	if (results.length > 0) {
		images = results.map(image => <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} title={image.title} /> );
	}  else {
		images = <NotFound />
	}

	return (
		<div className="photo-container">
          <h2>Results</h2>
          <ul>
            {images}
          </ul>
        </div>
	)
}


export default Gallery;
