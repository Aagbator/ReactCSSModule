/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import styles from './Top-Navigation.css';

export default class TopNavigation extends React.Component {

    toggleMenu = () => {
        this.props.toggleMenu();
    }

    render(){

        let menuClasses = this.props.isOpen ? `${styles['action-menu']} ${styles.open}` : `${styles['action-menu']}`;

        return(
            <nav className={styles.navigation}>
                <NavLink exact to="/" className={styles.logo}>
                    <img src={logo} alt="logo" />
                </NavLink>
                <div onClick={this.toggleMenu} className={menuClasses}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        )
    }
}

