import React from 'react';
import {render} from 'react-dom';

class Logo extends React.Component{
	constructor(props) {
    super(props);
    this.state = {clicked: true};
    this.onClick = this.onClick.bind(this);
  	}
  	onClick () {
    	let newColor = !this.state.clicked;
    	this.setState({clicked: newColor});
  	}
	render () {
		var image = this.state.clicked ? './images/banner.png' : './images/banner2.png'
		return (
      <div>
      <nav className="navbar navbar-fixed-top">
        <img className="img-responsive" src={image} onClick={this.onClick} height='70px' width='auto' />
      </nav>
      <nav className="navbar navbar-fixed-bottom">
        <img className="img-responsive" src={image} onClick={this.onClick} height='70px' width='auto' />
      </nav>
      </div>
		);
	}
}

export default Logo;