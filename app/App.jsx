import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import { browserHistory } from 'react-router' 
import Logo from './logo.jsx';
import Menu from './Menu.jsx';
import LeftBar from './leftBar.jsx';
import MainDisplay from './Display.jsx';
import BottomBar from './BottomBar.jsx';


class App extends React.Component {
	constructor(props) {
		super();
	    this.state = {page: "Dashboard"};
    	this.changePage = this.changePage.bind(this);

  	}
    changePage(page) {
		this.setState({page: page});
	}
  	render () {
	    var page = this.state.page;
		var items = ['Home', 'Services', 'About', 'Contact us'];
	    return (
	    	<div>
	    		<div>
	    		{this.state.page == "Home" ? <Logo /> :	<Menu changePage={this.changePage} hideHost='1' hideMod='1' hideMgmt='1'/>}
	    		</div>
	    		<div className="container-fluid page">
					<div className="row">
						<LeftBar changePage={this.changePage} page= {page}/>
						<MainDisplay changePage={this.changePage} page= {page}/>
					</div>
				</div>
				<div>
	    		{this.state.page == "Home" ? '' : <BottomBar changePage={this.changePage}/>}

				
		    	</div>
		    </div>
		)
	}
}

render(
	<Router history={browserHistory}>
		<Route path='/' component={App}/>
	</Router>
	, document.getElementById('app'));