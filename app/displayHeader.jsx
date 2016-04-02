import React from 'react';

class DisplayHeader extends React.Component{
	render() {
		return (
			<div className="well well-sm">
			    <div className="container">
			    	<h3>{this.props.page}</h3>
			    </div>
			</div>
		)
	}
};

export default DisplayHeader;