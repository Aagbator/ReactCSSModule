/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './Contact.css';
import iamswifta from '../../../assets/logo.svg';

export class Contact extends React.Component{

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
        }

        return(
            <section className={styles.contact}>
                <section className={styles['contact-intro']}>
                    <div className={styles.content}>
                        <h1>Contact</h1>
                        <p>
                             We are always ready to work with clients across the globe
                        </p>
                    </div>
                </section>
                <section className={styles['contact-section']}>
                    <div className={styles.container}>
                        <form className={styles.row}>
                            <div className={styles['col-1']}>
                                <h6>Please select a topic which best describes your interest</h6>
                                <div className={styles['radio-group']}>
                                    <label className={styles['radio-container']}>
                                        <input type="radio" name="radio" />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Enquiry</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={iamswifta} alt="iAmSwifta"/>
                                        </div>
                                    </label>
                                    <label className={styles['radio-container']}>
                                        <input type="radio" name="radio" />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Development</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={iamswifta} alt="iAmSwifta"/>
                                        </div>
                                    </label>
                                    <label className={styles['radio-container']}>
                                        <input type="radio" name="radio" />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Training</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={iamswifta} alt="iAmSwifta"/>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <div className={styles.contact}>
                                    <div className={`${styles['input-group']} ${styles['col-full']}`}>
                                        <input placeholder="Name" name="name" type="text" />
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-half']}`}>
                                        <input placeholder="Email" name="email" type="text" />
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-half']}`}>
                                        <input placeholder="Phone" name="phone" type="text" />
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-full']}`}>
                                        <textarea rows={5} placeholder="Message" name="message" type="text"></textarea>
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-full']}`}>
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className={styles.map}>
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
})(Contact);