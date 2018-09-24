/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class SwiftaMap extends React.Component{

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    render(){
        const style = {
            width: '100%',
            height: '100%'
        };

        const map = {
            position: 'relative',
            minHeight: '400px',
            overflow: 'hidden'
        }

        return(
            <section>
                <section style={map}>
                        <Map google={this.props.google}
                             style={style}
                             initialCenter={{
                                 lat: 6.4287701,
                                 lng: 3.4513234
                             }}
                             zoom={17}
                             onClick={() => this.onMapClicked}
                        >

                        <Marker onClick={() => this.onMarkerClick}
                            name={'Swifta Systems'}
                         />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </section>
            </section>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBVIV-DR7DqwGrOGfpn3OYiYL0JuxxVJo0",
    v: "3"
})(SwiftaMap);