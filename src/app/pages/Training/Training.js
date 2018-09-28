/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Training.css';
import trainings from './Training list';

export default class Training extends React.Component{

    // getBackgroundImg(value){
    //     return  require(`../../../assets/images/trainings/${value}`);
    // }


    render(){

        let trainingList = trainings.map((training, idx) =>
            <div className={styles.card} key={idx}>
                <div style={{backgroundImage: `url(${require(`../../../assets/images/trainings/${training.img}`)})`}} className={styles['img-container']}>
                    <div className={styles.logo}>
                        <img src={require(`../../../assets/images/trainings/${training.logo}`)} alt={training.title}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <h2>{training.title}</h2>
                    <p>{training.content}</p>
                </div>

                <div className={styles['action-area']}>
                    {training.url ? <a className={styles.button} href={training.url} rel="noopener noreferrer" target="_blank">Learn more</a> : '' }
                </div>

            </div>
        );

        return(
            <section className={styles.trainings}>
                <section className={styles['trainings-intro']}>
                    <div className={styles.content}>
                        <h1>Training</h1>
                        <p>
                            We help our clients position themselves for better opportunities by collaborating with some of our partners in offering IT certifications trainings.
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