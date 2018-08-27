/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './About.css';
import iamswifta from '../../../assets/images/iamswifta.png';

export default class About extends React.Component{

    render(){
        let teams = [
            {name: 'Victor Asemota', position: 'Chief Executive Officer', img:'victor.jpeg', linkedin: '', twitter: ''},
            {name: 'Chudi Nelson Ojukwu', position: 'Chairman', img:'nelson ojukwu.jpg', linkedin: '', twitter: ''},
            {name: 'Henry Afolabi David', position: 'Chief Technology Officer', img:'henry david.jpg', linkedin: '', twitter: ''},
            {name: 'Ayotunde Farinu', position: 'Chief Operating Officer', img:'Ayotunde.jpg', linkedin: '', twitter: ''},
            {name: 'Modupe Ladejebi', position: 'Head Of Products', img:'Modupe ladejebi.jpg', linkedin: '', twitter: ''},
            {name: 'Kayode Otegbeye', position: 'Managing Consultant', img:'kayode.jpg', linkedin: '', twitter: ''},
            {name: 'Adebola Owojobi', position: 'Head, Business Development', img:'Adebola.jpg', linkedin: '', twitter: ''},
            {name: 'Anthony Agbator', position: 'Head of Development', img:'Anthony.jpg', linkedin: '', twitter: ''}
        ];

        let teamList = teams.map((team, index) =>
                <div key={index} className={styles.card}>
                    <div className={styles['img-container']}>
                        <img src={require(`../../../assets/images/team/${team.img}`)} alt={team.name} />
                    </div>
                    <h2>{team.name}</h2>
                    <p>{team.position}</p>
                    <div className={styles.socials}>
                        <a href=""><i className={`${styles.linkedin} fab fa-linkedin`}></i> </a>
                        <a href=""><i className={`${styles.twitter} fab fa-twitter-square`}></i> </a>
                    </div>
                </div>
            );

        return(
            <section className={styles.about}>
                <section className={styles['about-intro']}>
                    <div className={styles.content}>
                        <h1>About</h1>
                        <p>
                            We aim to provide innovation and reliable solutions and services
                            that guarantee excellence for our client's businesses
                        </p>
                    </div>
                </section>
                <section className={styles['intro-container']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="iAmSwifta"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Empowering Africa<br></br> through Innovation</h2>
                                <p>Founded in 1994 and incorporated in 2003, we are as an
                                    Information Technology company that seeks to tap into
                                    world wide technology trends offers a wide range of
                                    professional IT services. We are an entrepreneurial
                                    company focused on the future with a commitment to
                                    pioneering African service excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['strategy-container']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="strategy"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Strategic Service Delivery</h2>
                                <p>Founded in 1994 and incorporated in 2003, we are as an
                                    Information Technology company that seeks to tap into
                                    world wide technology trends offers a wide range of
                                    professional IT services. We are an entrepreneurial
                                    company focused on the future with a commitment to
                                    pioneering African service excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['team-container']}>
                    <div className={styles.container}>
                        <header>
                            <h2>Our Team</h2>
                            <p>We are experienced in our tech stack with a large team of developers, designers,
                                product managers, testers, QA and more </p>
                        </header>
                        <div className={styles['team-profiles']}>
                            {teamList}
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}