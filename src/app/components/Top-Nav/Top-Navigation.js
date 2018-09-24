/**
 * Created by Anthony on 14/08/2018.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import logo2 from '../../../assets/logo2.svg';
import styles from './Top-Navigation.css';

export default class TopNavigation extends React.Component {

    state = {
        mainNnav : false
    }

    toggleMenu = () => {
        this.props.toggleMenu();
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            if(window.scrollY>100){
                this.setState({ mainNnav: true });
            }
            else{
                this.setState({ mainNnav: false });
            }
        });
    }



    render(){

        let menuClasses = this.props.isOpen ? `${styles['action-menu']} ${styles.open}` : `${styles['action-menu']}`;

        let navClasses =  this.state.mainNnav ?  `${styles.navigation} ${styles['nav-style']}` : `${styles.navigation}` ;

        return(
            <nav className={navClasses}>
                <NavLink exact to="/" className={styles.logo}>
                    <img className={styles.transparentLogo} src={logo2} alt="logo" />
                    <img className={styles.mainLogo} src={logo} alt="logo" />
                </NavLink>
                <ul className={styles.menu}>
                    <li><NavLink to="/about" activeClassName={styles['link-active']}>About</NavLink></li>
                    <li><NavLink to="/services" activeClassName={styles['link-active']}>Services</NavLink></li>
                    <li><NavLink to="/products" activeClassName={styles['link-active']}>Products</NavLink></li>
                    <li><NavLink to="/training" activeClassName={styles['link-active']}>Trainings</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={styles['link-active']}>Contacts</NavLink></li>
                </ul>
                <div onClick={this.toggleMenu} className={menuClasses}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        )
    }
}

