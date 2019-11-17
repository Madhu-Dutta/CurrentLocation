import React, { Component } from 'react';
import { Map,GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from './Map';

const mapStyles = {
    position: '',
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {

    state={
        showingInfoWindow: false,
        activeMarkers: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, markers, e) => {
        this.setState({
            selectedPlace: props,
            activeMarkers: markers,
            showingInfoWindow: true
        })
    }

    onClose = (props) => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarkers: null
            })
        }
    }
    render() {
        return (
            // <Map 
            //     google = {this.props.google}
            //     zoom = {14}
            //     style = {mapStyles}
            //     initialCenter = {{
            //         lat: -37.8116,
            //         lng: 144.9646                  

            //     }}
            // >
             <CurrentLocation 
                centerAroundCurrentLocation 
                google={this.props.google}
            > 
                <Marker 
                    onClick={this.onMarkerClick}
                    name={'current location'}
                />
                <InfoWindow
                    marker={this.state.activeMarkers}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>

          </CurrentLocation>
            
        // </Map>
        )
    }
}

export default GoogleApiWrapper(
   (props)=>({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
   } 
))(MapContainer);
