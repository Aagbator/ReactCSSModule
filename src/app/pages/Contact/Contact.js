/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Contact.css';
import SwiftaMap from './SwiftaMap/SwiftaMap';

export default class Contact extends React.Component{

    state = {
        topic:'',
        name:'',
        email:'',
        phone:'',
        message:'',

        sending: false
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({sending: true});
        console.log(this.state);

        fetch('http://swifta.com/contact-api.php', {
            method: 'POST',
            body:JSON.stringify({
                topic:this.state.topic,
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
                message:this.state.message
            })
        }).then((res) => res.json())
            .then((data) =>
                console.log(data),
                this.setState({sending: false})
            )
            .catch((err)=>console.log(err))
    }

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
                        <form className={styles.row} onSubmit={this.handleSubmit}>
                            <div className={styles['col-1']}>
                                <h6>Please select a topic which best describes your interest</h6>
                                <div className={styles['radio-group']}>
                                    <label className={styles['radio-container']}>
                                        <input onChange={event => this.handleChange(event)} type="radio" name="topic" value="enquiry" />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Enquiry</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={require(`../../../assets/icons/contact/enquiry.svg`)} alt="enquiry"/>
                                        </div>
                                    </label>
                                    <label className={styles['radio-container']}>
                                        <input onChange={event => this.handleChange(event)} type="radio" name="topic" value="development"  />

                                        <div className={styles.checkmark}>
                                            <span className={styles.text}>Development</span>
                                        </div>
                                        <div className={styles['img-container']}>
                                            <img src={require(`../../../assets/icons/contact/development.svg`)} alt="development"/>
                                        </div>
                                    </label>
                                    <label className={styles['radio-container']}>
                                        <input onChange={event => this.handleChange(event)} type="radio" name="topic" value="training"  />

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
                                        <input placeholder="Name" name="name"   type="text"
                                               onChange={event => this.handleChange(event)}   />
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-half']}`}   >
                                        <input placeholder="Email" name="email" type="text"   onChange={event => this.handleChange(event)} />
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-half']}`}>
                                        <input placeholder="Phone" name="phone" type="text"   onChange={event => this.handleChange(event)} />
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-full']}`}>
                                        <textarea rows={5} placeholder="Message" name="message" type="text"  onChange={event => this.handleChange(event)} ></textarea>
                                    </div>
                                    <div className={`${styles['input-group']} ${styles['col-full']}`}>
                                        <input className={styles.button} disabled={this.state.sending} type="submit" value={this.state.sending? 'Please Wait ...':'Send Message'}></input>
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