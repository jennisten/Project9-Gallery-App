//main container component that handles state and functionality
import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import links from './links';

import Header from './components/Header';
import PageNotFound from './components/PageNotFound';


//component that handles the api calls, routes and renders page accordingly
class App extends Component {

	constructor() {
		super();
		this.state = {
			data: [],
			loading: true,
			links: links,
			query: ''
		}
	}

	componentDidMount() {
		this.gallerySearch();
	}

	//function to handle all api calls, as a response from Form and Nav components
	gallerySearch = (query = "welcome") => {
		axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
		.then(response => {
			this.setState({
				data: response.data.photos.photo,
				loading: false,
				query: query,
			})
		})
		.catch(error => {
			console.log('Error fetching and parsing data', error);
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Switch>
						<Route exact path="/" render={ () => <Header onSearch={this.gallerySearch} links={this.state.links} data={this.state.data} query={this.state.query} loading={this.state.loading} /> } />
						<Route path="/search/:query" render={ () => <Header onSearch={this.gallerySearch} links={this.state.links} data={this.state.data} query={this.state.query} loading={this.state.loading} /> } />
						<Route component={PageNotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
 	}
}

export default App;
