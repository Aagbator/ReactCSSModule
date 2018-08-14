/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
import logo from '../../../assets/logo.svg';
import styles from './Navigation.css';

export default class Navigation extends React.Component {

    render(){
        return(
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <img src={logo} className={styles.logo} alt="logo" />
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>

                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

