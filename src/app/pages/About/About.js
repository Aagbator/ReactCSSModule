/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './About.css';

export default class About extends React.Component{

    render(){
        let teams = [
            {name: 'Victor Asemota', position: 'Chief Executive Officer', img:'victor.jpeg', linkedin: 'https://www.linkedin.com/in/asemota/', twitter: 'https://twitter.com/asemota'},
            {name: 'Chudi Nelson Ojukwu', position: 'Chairman', img:'nelson ojukwu.jpg', linkedin: 'https://www.linkedin.com/in/chudi-ojukwu-85015a39/', twitter: 'https://twitter.com/nelsonchudi'},
            {name: 'Henry Afolabi David', position: 'Chief Technology Officer', img:'henry david.jpg', linkedin: 'https://www.linkedin.com/in/henry-david-1003a848/', twitter: 'https://twitter.com/henrydee'},
            {name: 'Ayotunde Farinu', position: 'Chief Operating Officer', img:'Ayotunde.jpg', linkedin: 'https://www.linkedin.com/in/ayotunde-farinu-5a092317/', twitter: 'https://twitter.com/contactayotunde'},
            {name: 'Modupe Ladejebi', position: 'Head Of Products', img:'Modupe ladejebi.jpg', linkedin: 'https://www.linkedin.com/in/ladejebi-modupe-40133318/', twitter: 'https://twitter.com/dupsykool'},
            //{name: 'Kayode Otegbeye', position: 'Managing Consultant', img:'kayode.jpg', linkedin: 'https://www.linkedin.com/in/kayode-otegbeye-85929243/', twitter: 'https://twitter.com/opeyemi_snr'},
            {name: 'Adebola Sanni', position: 'Head, Business Development', img:'Adebola.jpg', linkedin: 'https://www.linkedin.com/in/adebolasanniawojobi/', twitter: ''}
            // {name: 'Anthony Agbator', position: 'Head of Development', img:'Anthony.jpg', linkedin: '', twitter: ''}
        ];

        let teamList = teams.map((team, index) =>
                <div key={index} className={styles.card}>
                    <div className={styles['img-container']}>
                        <img src={require(`../../../assets/images/team/${team.img}`)} alt={team.name} />
                    </div>
                    <h2>{team.name}</h2>
                    <p>{team.position}</p>
                    <div className={styles.socials}>
                        { team.linkedin? <a href={team.linkedin} rel="noopener noreferrer" target="_blank"><i className={`${styles.linkedin} fab fa-linkedin`}></i></a> : ''}
                        { team.twitter? <a href={team.twitter} rel="noopener noreferrer" target="_blank"><i className={`${styles.twitter} fab fa-twitter-square`}></i></a> : ''}
                    </div>
                </div>
            );

        return(
            <section className={styles.about}>
                {/*<intro title="About">hi</intro>*/}
                <section className={styles['about-intro']}>
                    <div className={styles.content}>
                        <h1>About</h1>
                        <p>
                            We aim to provide innovation and reliable solutions and services
                            that guarantee excellence for our clients' businesses
                        </p>
                    </div>
                </section>
                <section className={styles['intro-container']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={require('../../../assets/images/innovation.svg')} alt="strategy"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Empowering Africa through Innovation</h2>
                                <p>Founded in 1994 and incorporated in 2003,
                                    we are an Information Technology company that seeks to tap into world wide technology trends.
                                    We offers a wide range of professional IT services and products.
                                    We are an entrepreneurial company focused on the future with a commitment to pioneering African service excellence. We are in touch with the future!
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
                                    <img src={require('../../../assets/images/strategy.svg')} alt="strategy"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Strategic Service Delivery</h2>
                                <p>
                                    Our business strategy focuses on offering expert Managed services,
                                    Integration, Development services to our clients as well as the
                                    provision of viable and scalable enterprise software solutions with
                                    a focus on delivering exceptional services to our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['team-container']}>
                    <div className={styles.container}>
                        <header>
                            <h2>Our Team</h2>
                            <p>We are experienced in our tech stack with a large team of entrepreneurs,
                                sales executives, developers, designers, product managers, support engineers, project managers,
                                business analysts, system architect, systems integrators, testers, QA and more</p>
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