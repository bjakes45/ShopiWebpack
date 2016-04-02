import React from 'react';
import {render} from 'react-dom';

class SugItem extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {heart: false};
    	this.handleHeart = this.handleHeart.bind(this);
  	}
	handleHeart(){
		let newHeart = !this.state.heart;
    	this.setState({heart: newHeart});
  	}
		
	render(){
		var heartClass = this.state.heart ? "btn btn-heart" : "btn btn-default"
		return(
			<div className="panel">
				<div className="row">
					<div className="col-xs-4">
						<img src="http://placehold.it/80x80/fdff00/000000?text=No+Picture+Provided"/>
					</div>
					<div className="col-xs-5">
						<strong>{this.props.name}</strong>
						<p>{this.props.desc}</p>

					</div>
					<div className="col-xs-3">
					<span>
						<button className={heartClass} type="button" onClick={this.handleHeart}><span className="glyphicon glyphicon-heart"/></button>
      				</span>
      				<br/><br/><br/>
      				<span>
        				<button className="btn btn-default" type="button"><span className="glyphicon glyphicon-star"/></button>
      				</span>
					</div>
				</div>
			</div>
		)
	}
}

export default SugItem;