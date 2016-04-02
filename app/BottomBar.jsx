import React from 'react';
import {render} from 'react-dom';

class BottomBar extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {pageName: "Home"};
    	this.getPage = this.getPage.bind(this);
  	}
    getPage(event) {
		var page = event.target.id;
		this.setState({pageName: page});
		this.props.changePage(page);
	}
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-bottom">
 				<div className="container-fluid">
					<div className="navbar-collapse collapse" aria-expanded='false'>
				      	<ul className="nav navbar-nav">
					        <li>
					        	<a href="#"id="Contact" onClick={this.getPage}>Contact Us</a>
					        </li>
			  	        </ul>
			  	        <ul className="nav navbar-nav navbar-right">
					        <li>
					        	<a href="#" id="About" onClick={this.getPage}>Shopidartiy &copy; 2016</a>
					        </li>
				      	</ul>
				    </div>
  				</div>
			</nav>
  		)
  	}
};

export default BottomBar;