/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
// import { NavLink } from 'react-router-dom'
import styles from './Footer.css';

export default class Footer extends React.Component {

    render(){
        return(
            <footer className={styles.footer}>
                <div className={styles['col-1']}>
                    <h1>Get in Touch</h1>
                    <div className={styles.mailbox}>
                        <h6>Email</h6>
                        <a href="mailto:info@swifta.com">info@swifta.com</a>
                        <br></br>
                        <a href="mailto:sales@swifta.com">sales@swifta.com</a>
                    </div>
                </div>
                <div className={styles['col-2']}>
                    <h2>Lagos</h2>
                    <address>
                        6B, Crown Court Estate <br></br>
                        Orisa Sanya street<br></br>
                        Oniru estate<br></br>
                        Victoria Island
                    </address>
                </div>
                <div className={styles['col-3']}>
                    <h2>Accra</h2>
                    <address>
                        Trinity Junction, Off IPS Road<br></br>
                        Mempeason HSE No. 15<br></br>
                        East legon<br></br>
                        Accra<br></br>
                    </address>
                </div>
            </footer>
        )
    }
}

