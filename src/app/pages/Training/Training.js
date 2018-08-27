/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Training.css';
import trainings from './Training list';
import mock from '../../../assets/images/trainings/bg2.jpg';
import logo from '../../../assets/logo.svg';

export default class Training extends React.Component{

    render(){

        let trainingList = trainings.map((training, idx) =>
                <div className={styles.card}>
                    <div style={{ backgroundImage:  `url(${mock})` }} className={styles['img-container']}>
                        <div className={styles.logo}>
                            <img src={require(`../../../assets/images/trainings/${training.logo}`)} alt={training.title}/>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2>{training.title}</h2>
                        <p>{training.content}</p>
                    </div>
                </div>
        );

        return(
            <section className={styles.trainings}>
                <section className={styles['trainings-intro']}>
                    <div className={styles.content}>
                        <h1>Training</h1>
                        <p>
                            We have successfully delivered on-site and off-site product development
                            (software applications), project management, deployment & integration
                            managed services,to our clients in western, eastern and central Africa.
                        </p>
                    </div>
                </section>
                <section className={styles['trainings-container']}>
                    <section className={styles.container}>
                        <div className={styles['trainings-cards']}>
                            {trainingList}
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}