import { h, Component } from 'preact';
import 'framework7/dist/css/framework7.css';
import F7 from 'framework7';

import { Framework7, View, Router, Route, Navbar, Page } from '../dist/preact-f7';

const params = {
  view: {
    pushState: true
  }
};

class HomePage extends Component {

	state = {
		name: 'Russian'
	}

	changeName = () => {
		this.setState({name: 'Maysa'});
	}

	render() {
		return (
			<Page hideNavbarOnScroll>
				<Navbar title="preact-f7" />
				<button onClick={this.changeName}>CHANGE NAME</button>
				<h1>{this.state.name}</h1>
				<a href="/about/"> About Page</a>
			</Page>	
		)
	}
} 

class AboutPage extends Component {

	state = {
		name: 'Russian'
	}

	changeName = () => {
		this.setState({name: 'Maysa'});
	}

	render(...args) {
		return (
			<Page>
				<Navbar title="preact-f7" />
				<button onClick={this.changeName}>CHANGE NAME</button>
				<h1>{this.state.name}</h1>
				<a href="/about/"> About Page</a>

			</Page>	
		)
	}
} 

export default class App extends Component {
	render() {
		return (
			<Framework7 F7={F7} params={params}>
				<View>
					<Router>
						<Route path="/" component={HomePage}/>
						<Route path="/about/" component={AboutPage}/>
					</Router>
				</View>
			</Framework7>
		);
	}
}

