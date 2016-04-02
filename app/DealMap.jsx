import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class SimpleMap extends React.Component {
  constructor(props) {
	    super(props);
	    this.state = {markers: [
	    	{key: 1, lat: 49.247525, lng: -123.0761721},
	    	{key:2, lat: 49.247535, lng: -123.0761721},	
	    ]};
  	}
  	handleMarkerRightclick(){

  	}
  render() {
	  return (
	    <section style={{height: "90%",width: "100%"}}>
	      <GoogleMapLoader
	        containerElement={
	          <div
	            {...this.props}
	            style={{
	              height: "100%",
	            }}
	          />
	        }
	        googleMapElement={
	          <GoogleMap className="map"
	            ref={(map) => console.log(map)}
	            defaultZoom={13}
	            defaultCenter={{lat: 49.247531, lng: -123.0761721}}
	            onClick={this.handleMapClick}>
	            {this.state.markers.map((marker, index) => {
	              return (
	                <Marker
	                  {...marker}
	                  onRightclick={this.handleMarkerRightclick.bind(this, index)} />
	              );
	            })}
	          </GoogleMap>
	        }
	      />
	    </section>
	  );
	}
}