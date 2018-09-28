/**
 * Created by Anthony on 26/09/2018.
 */
import React from 'react';
import styles from './Intro.css';

const Intro = (props) => (
        <section className={styles.intro}>
            <div className={styles.content}>
                <h1>{props.title}</h1>
                <p>
                    {props.children}
                </p>
            </div>
        </section>
    );

export default Intro;