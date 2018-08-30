/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import about from '../../../assets/icons/about.svg';
import styles from './Top-Navigation.css';

export default class TopNavigation extends React.Component {

    toggleMenu = () => {
        this.props.toggleMenu();
        console.log('**** is open ****',this.props.isOpen);
    }

    render(){

        let menuClasses = this.props.isOpen ? `${styles['action-menu']} ${styles.open}` : `${styles['action-menu']}`;

        return(
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={this.toggleMenu} className={menuClasses}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        )
    }
}

