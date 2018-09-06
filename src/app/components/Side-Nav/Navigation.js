/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import styles from './Navigation.css';

export default class SideNavigation extends React.Component {

    toggleMenu = () => {
        this.props.toggleMenu();
        console.log('**** is open ****',this.props.isOpen);
    }

    hideMenu = () => {
        this.props.hideMenu();
        console.log('**** is open ****',this.props.isOpen);
    }

    render(){

        let menuClasses = this.props.isOpen ? `${styles.navigation} ${styles['mobile-open']}` : `${styles.navigation}`;

        return(
            <nav className={menuClasses}>
                <ul>
                    <li onClick={this.hideMenu}>
                        <NavLink exact to="/" activeClassName={styles['link-active']} className={`${styles.link} ${styles.brand}`}>
                            <div className={styles.logo}>
                                <img src={logo} alt="logo" />
                            </div>
                        </NavLink>
                    </li>

                    <li onClick={this.hideMenu}>
                        <NavLink to="/about" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-1']}`}>
                            <div className={styles.icon}>
                                <img src={require('../../../assets/icons/sidemenu/about.svg')}    alt="logo" />
                            </div>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li onClick={this.hideMenu}>
                        <NavLink to="/services" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-2']}`}>
                            <div className={styles.icon}>
                                <img src={require('../../../assets/icons/sidemenu/services.svg')}   alt="logo" />
                            </div>
                            <span>Services</span>
                        </NavLink>
                    </li>
                    <li onClick={this.hideMenu}>
                        <NavLink to="/products" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-3']}`}>
                            <div className={styles.icon}>
                                <img src={require('../../../assets/icons/sidemenu/products.svg')}   alt="logo" />
                            </div>
                            <span>Products</span>
                        </NavLink>
                    </li>
                    <li onClick={this.hideMenu}>
                        <NavLink to="/training" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-4']}`}>
                            <div className={styles.icon}>
                                <img src={require('../../../assets/icons/sidemenu/trainings.svg')}    alt="logo" />
                            </div>
                            <span>Training</span>
                        </NavLink>
                    </li>
                    <li onClick={this.hideMenu}>
                        <NavLink to="/contact" activeClassName={styles['link-active']} className={`${styles.link} ${styles['nav-color-5']}`}>
                            <div className={styles.icon}>
                                <img src={require('../../../assets/icons/sidemenu/contact.svg')}  alt="logo" />
                            </div>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className={styles.socials}>
                            <a  rel="noopener noreferrer" href="https://www.facebook.com/Swifta-Systems-and-Services-697969463605870" target="_blank" ><i className={`fab fa-facebook-f`}></i></a>
                            <a  rel="noopener noreferrer" href="https://twitter.com/SwiftaSystems" target="_blank" ><i className={`fab fa-twitter`}></i></a>
                            <a  rel="noopener noreferrer" href="http://www.linkedin.com/company/swifta-systems-and-services/" target="_blank" ><i className={`fab fa-linkedin-in`}></i> </a>
                            <p> &copy; 2018 Swifta</p>
                        </div>

                    </li>
                </ul>
            </nav>
        )
    }
}

