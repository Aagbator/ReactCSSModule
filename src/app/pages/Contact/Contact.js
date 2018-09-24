/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Contact.css';
import SwiftaMap from './SwiftaMap/SwiftaMap';

export default class Contact extends React.Component{

    render(){
        return(
            <section className={styles.contact}>
                <section className={styles['contact-intro']}>
                    <div className={styles.content}>
                        <h1>Contact</h1>
                        <p>
                            We’re Here To Help Your Business Blast Off!
                            through Creative Ideas, Innovation & Sheer Determination
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
                                            <img src={require(`../../../assets/icons/contact/enquiry.svg`)} alt="enquiry"/>
                                        </div>
                                    </label>
                                    <label className={styles['radio-container']}>
                                        <input type="radio" name="radio" />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Development</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={require(`../../../assets/icons/contact/development.svg`)} alt="development"/>
                                        </div>
                                    </label>
                                    <label className={styles['radio-container']}>
                                        <input type="radio" name="radio" />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Training</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={require(`../../../assets/icons/contact/training.svg`)} alt="training"/>
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
                    <SwiftaMap />
                </section>
            </section>

        )
    }
}

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyBVIV-DR7DqwGrOGfpn3OYiYL0JuxxVJo0",
//     v: "3"
// })(Contact);