/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Home.css';

export default class Home extends React.Component{
    render(){
        return(
            <div className={styles.home}>
                <p>Hello World!</p>
                <h5>home</h5>
            </div>
        )
    }
}