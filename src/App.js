import React, { Component } from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Loading from './components/Loading';


class App extends Component {

	constructor() {
		super();
		this.state = {
			data: [],
			loading: true
		}
	}

	componentDidMount() {
		this.gallerySearch();
	}

	gallerySearch = (query = 'pinguin') => {
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
		.then(response => {
			this.setState({
				data: response.data.photos.photo,
				loading: false
			})
		})
		.catch(error => {
			console.log('Error fetching data', error);
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Header onSearch={this.gallerySearch} />
					{
						(this.state.loading)
						? <Loading />
						: <Gallery data={this.state.data}/>
					}
				</div>
			</BrowserRouter>
		);
 	}
}

export default App;
