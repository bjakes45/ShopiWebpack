import React from 'react';
import {render} from 'react-dom';

class LeftBar extends React.Component{
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
		switch(this.props.page){
		case "Home":
			return (
				<div className="col-xs-6">
					<div className="panel panel-default home pic">
				      	
				    </div>
				</div>
			)
		break;
		case "Library":
			return (
				<div className="col-xs-2">
		    		<div className="panel panel-default leftdisplay">
					    <div className="panel-body text-center">
					    	<br/>
					    	<div className="panel SideOption" id="Library">
					    		<h5>Items</h5>
					    	</div>
					    	<div className="panel SideOption" onClick={this.getPage} id="Companies">
					    		<h5>Companies</h5>
					    	</div>
					    	<div className="panel SideOption" onClick={this.getPage} id="Matches">
					    		<h5>Matches</h5>
					    	</div>
					    </div>
					</div>
		        </div> 
			)
		break;
		case "Cupboard":
			return (
				<div className="col-xs-2">
		    		<div className="panel panel-default leftdisplay">
					    <div className="panel-body text-center">
					    	<br/>
					    	<div className="panel SideOption">
					    		<h5>Favourites</h5>
					    	</div>
					    	<div className="panel SideOption">
					    		<h5>Messages</h5>
					    	</div>
					    	<div className="panel SideOption">
					    		<h5>Deal Center</h5>
					    	</div>
					    </div>
					</div>
		        </div> 
			)
		break;
		case "Hosting":
			return (
				<div className="col-xs-2">
		    		<div className="panel panel-default leftdisplay">
					    <div className="panel-body text-center">
					    	<br/>
					    	<div className="panel SideOption">
					    		<h5>Add Item</h5>
					    	</div>
					    	<div className="panel SideOption">
					    		<h5>Manage Deals</h5>
					    	</div>
					    	<div className="panel SideOption">
					    		<h5>Cred Bank</h5>
					    	</div>
					    </div>
					</div>
		        </div> 
			)
		break;
		default:
			return (
				<div className="col-xs-2">
		    		<div className="panel panel-default leftdisplay">
					    <div className="panel-body text-center">
					    	<br/>
					    	<div className="panel SideOption" onClick={this.getPage} id="Library">
					    		<h5 id="Library">Library</h5>
					    	</div>
					    	<div className="panel SideOption" onClick={this.getPage} id="Cupboard">
					    		<h5 id="Cupboard">Cupboard</h5>
					    	</div>
					    	<div className="panel SideOption" onClick={this.getPage} id="Profile">
					    		<h5 id="Profile">Profile</h5>
					    	</div>
					    </div>
					</div>
		        </div> 
			)
		break;
		}
  	}
};

export default LeftBar;