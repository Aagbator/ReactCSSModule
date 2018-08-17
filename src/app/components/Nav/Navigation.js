/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg';
import about from '../../../assets/icons/about.svg';
import styles from './Navigation.css';

export default class Navigation extends React.Component {

    render(){
        return(
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName={styles['link-active']} className={`${styles.link} ${styles.brand}`}>
                            <div className={styles.logo}>
                                <img src={logo} alt="logo" />
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-1']}`}>
                            <div className={styles.icon}>
                                <img src={about}   alt="logo" />
                            </div>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-2']}`}>
                            <div className={styles.icon}>
                                <img src={about}   alt="logo" />
                            </div>
                            <span>Services</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-3']}`}>
                            <div className={styles.icon}>
                                <img src={about}   alt="logo" />
                            </div>
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/training" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-4']}`}>
                            <div className={styles.icon}>
                                <img src={about}   alt="logo" />
                            </div>
                            <span>Training</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-5']}`}>
                            <div className={styles.icon}>
                                <img src={about} alt="logo" />
                            </div>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className={styles.socials}>
                            <a><i className={`fab fa-facebook-f`}></i></a>
                            <a><i className={`fab fa-twitter`}></i></a>
                            <a><i className={`fab fa-linkedin-in`}></i> </a>
                            <p> &copy; 2018 Swifta</p>
                        </div>

                    </li>
                </ul>
            </nav>
        )
    }
}

