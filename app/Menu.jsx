import React from 'react';
import {render} from 'react-dom';

class Menu extends React.Component{
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
			<nav className="navbar navbar-inverse navbar-fixed-top">
  				<div className="container-fluid">
  					<div className="navbar-header logo">
      					<a className="navbar-brand" href="#" onClick={this.getPage} id="Dashboard"><image className="img-responsive" src="./images/smlogo.png" width='40px' id="Dashboard" /></a>
    				</div>
					<div className="navbar-collapse collapse" aria-expanded='false'>
						<ul className="nav navbar-nav">
						    <li>
						    <div>
						    <span>
        						<button className="btn btn-default SearchBtn" type="button"><span className="glyphicon glyphicon-barcode"/></button>
      						</span>
						    <input className="SearchBar"/>
						    <span>
        						<button className="btn btn-default SearchBtn" type="button"><span className="glyphicon glyphicon-search"/></button>
      						</span>
      						</div>
						    </li>
						    <li onClick={this.getPage}>
						       	<a href="#" id="Library">
						       		<span className="glyphicon glyphicon-menu-hamburger" id="Library" /><span id="Library"> Library</span>
						       	</a>
						    </li>
						    <li>
						       	<a href="#" id="Cupboard" onClick={this.getPage}>
						       		<span className="glyphicon glyphicon-cutlery" id="Cupboard" /><span id="Cupboard"> Cupboard</span>
						       	</a>
						    </li>
						    <li className={this.props.hideHost ? 'hidden' :''}>
						       	<a href="#" id="Hosting" onClick={this.getPage}>
						       		<span className="glyphicon glyphicon-star-empty" id="Hosting" /><span id="Hosting"> Hosting</span>
						       	</a>
						    </li>
						    <li className={this.props.hideMod ? 'hidden' :''}>
						       	<a href="#" id="Moderators" onClick={this.getPage}>
						       		<span className="glyphicon glyphicon-book" id="Moderators" /><span id="Moderators"> Moderators</span>
						       	</a>
						    </li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
						    <li className={this.props.hideMgmt ? 'hidden' :''}>
						       	<a href="#" onClick={this.getPage} id="Management">
						       		<span className="glyphicon glyphicon-asterisk" id="Management" /><span id="Management"> Management</span>
						       	</a>
						    </li> 
						    <li>
						       	<a href="#" onClick={this.getPage} id="Profile">
						           	<span className="glyphicon glyphicon-user" id="Profile" /><span id="Profile"> Profile</span>
						       	</a>
					       	</li>
					       	<li>
					       		<a href="#" onClick={this.getPage} id="Home">
					       			<span className="glyphicon glyphicon-log-in" id="Home" /><span id="Home"> Logout</span>
					       		</a>
					       	</li>
					    </ul>
					</div>
                </div>
			</nav>
  		)
  	}
};

export default Menu;
