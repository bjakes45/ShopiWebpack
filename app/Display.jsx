import React from 'react';
import {render} from 'react-dom';
import DisplayHeader from './displayHeader.jsx';
import AwesomeComponent from './AwesomeComponent.jsx';
import SimpleMap from './DealMap.jsx';
import SugItem from './SugItem.jsx';


class MainDisplay extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	pageName: "Home",
	    	itemListState: []
	    };
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
					      	<br/>
					      	<h3>Enter your information:</h3><br/>
					      	<div className="row">
					      		<div className="col-xs-4">
							      	Login:<input type="text"/>
							    </div>
							    <div className="col-xs-4">
							      	Password:<input type="password"/>
							    </div>
							    <div className="col-xs-4">
							      	<button onClick={this.getPage} id="Dashboard">
							      	<span id="Dashboard">Login</span>
							      	</button>
							    </div>
							</div>
							<br/><br/>
							<div className="panel panel-default text-center Signup">
								<br/>
								<h3>New here?</h3><br/>
								Email:<input type="text"/><br/><br/>
								Date of Birth:<input type="date"/><br/><br/>
								Password:<input type="text"/><br/><br/>
								Retype Password:<input type="text"/><br/><br/><br/>
							</div>
					</div>
				)
			break;
			case "Library":
				onComponentMount() {
					$.ajax({ type: 'GET', url: '/api/plucodes', data: { name: Name, plu: PLU } })
  					.done((data) => {
						this.setState({ itemListState: data.message });
					})
					.fail((jqXhr) => {
						this.setState({ helpBlock: jqXhr.responseJSON.message });
					})
					.always(() => {
					    this.setState({ name: '', plu: '' });
					})
				};
				var items = [
					{_id:"1",name:"item1",desc:"desc1"},
					{_id:"2",name:"item2",desc:"desc2"},
					{_id:"3",name:"item3",desc:"desc3"},
					{_id:"4",name:"item4",desc:"desc4"}
				];
				var items2 = [
					{_id:"5",name:"item5",desc:"desc5"},
					{_id:"6",name:"item6",desc:"desc6"},
					{_id:"7",name:"item7",desc:"desc7"},
					{_id:"8",name:"item8",desc:"desc8"}
				];
				var itemList = items.map(function (item) {
					return (
						<SugItem name={item.name} desc={item.desc}/>
					)
				})
				var itemList2 = items2.map(function (item) {
					return (
						<SugItem name={item.name} desc={item.desc}/>
					)
				})
				return (
				<div className="col-xs-10">
					   	<div className="display">
				      		<div className="row">
				      			<div className="col-xs-6">
				      				<h3>All Items:</h3>
				      				<div className="row">
					    				<div className="col-xs-6">
							    			{itemList}
										</div>
					      				<div className="col-xs-6">
							      			{itemList2}
							      		</div>
					    			</div>
					    		</div>
				      			<div className="col-xs-6">
				      				<div className="row">
				      					<div className="col-xs-5">
						      				<h3>Order Items by </h3>
						      			</div>
				      					<div className="col-xs-7">
						      				<div className="dropdown FilterBox">
											  <select>
											    <a href="#"><option>Name</option></a>
											    <a href="#"><option>Rating</option></a>
											  </select>
											</div>
										</div>
									</div>
				      				<div className="row">
					      				<div className="col-xs-6">
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
										</div>
					      				<div className="col-xs-6">
							      			<SugItem/>
							      			<SugItem/>
							    			<SugItem/>
							      			<SugItem/>
							      		</div>
							    	</div>
						    	</div>
					      	</div>
					    </div>
					</div>
				)
			break;
			case "Cupboard":
				return (
				<div className="col-xs-10">
					   	<div className="display">
				      		<div className="row">
				      			<div className="col-xs-6">
				      				<h3>Favourite Items:</h3>
				      				<div className="row">
					    				<div className="col-xs-6">
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
										</div>
					      				<div className="col-xs-6">
							      			<SugItem/>
							      			<SugItem/>
							    			<SugItem/>
							      			<SugItem/>
							      		</div>
					    			</div>
					    		</div>
				      			<div className="col-xs-6">
					      			<h3><br/></h3>
				      				<div className="row">
					      				<div className="col-xs-6">
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
										</div>
					      				<div className="col-xs-6">
							      			<SugItem/>
							      			<SugItem/>
							    			<SugItem/>
							      			<SugItem/>
							      		</div>
							    	</div>
						    	</div>
					      	</div>
					    </div>
					</div>
				)
			break;
			case "Dashboard":
			var items = [
					{_id:"1",name:"item1",desc:"desc1"},
					{_id:"2",name:"item2",desc:"desc2"},
					{_id:"3",name:"item3",desc:"desc3"},
					{_id:"4",name:"item4",desc:"desc4"}
				];
				var itemList = items.map(function (item) {
					return (
						<SugItem name={item.name} desc={item.desc}/>
					)
				})
				var items2 = [
					{_id:"5",name:"item5",desc:"desc5"},
					{_id:"6",name:"item6",desc:"desc6"},
					{_id:"7",name:"item7",desc:"desc7"},
					{_id:"8",name:"item8",desc:"desc8"}
				];
				var itemList2 = items2.map(function (item) {
					return (
						<SugItem name={item.name} desc={item.desc}/>
					)
				})
				return(
					<div className="col-xs-10">
					   	<div className="display">
				      		<div className="row">
				      			<div className="col-xs-6">
					      			<h3>Deals Near You:</h3>
				      				<div>
					    				<SimpleMap className='map'/>
					    			</div>
					    			<br/>	
				      				<button className="form-control">Find More</button>
					    		</div>
				      			<div className="col-xs-6">
					      			<h3>Suggested Items:</h3>
				      				<div className="row">
					      				<div className="col-xs-6">
							    			{itemList}
										</div>
					      				<div className="col-xs-6">
							      			{itemList2}
							      		</div>
							    	</div>
						    	</div>
					      	</div>
					    </div>
					</div>
				)
			break;
			default:
				return (
				<div className="col-xs-10">
					   	<div className="display">
				      		<div className="row">
				      			<div className="col-xs-6">
				      				<div className="row">
					    				
					    			</div>
					    		</div>
				      			<div className="col-xs-6">
					      			<h3>Suggested Items:</h3>
				      				<div className="row">
					      				<div className="col-xs-6">
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
							    			<SugItem/>
										</div>
					      				<div className="col-xs-6">
							      			<SugItem/>
							      			<SugItem/>
							    			<SugItem/>
							      			<SugItem/>
							      		</div>
							    	</div>
						    	</div>
					      	</div>
					    </div>
					</div>
				)
			break;
		}
	}
}

export default MainDisplay;
