/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Home.css';
import patner from '../../../assets/images/partners/partner.png';
import iamswifta from '../../../assets/images/iamswifta.png';

export default class Home extends React.Component{
    render(){
        return(
            <section className={styles.home}>
                <section className={styles['home-container']}>
                    <div className={styles.content}>
                        <h1>We Provide innovative approach to technology solutions across Africa</h1>
                        <p>
                            We are committed to the future of Africa enterprises while leveraging on
                            sophisticated technology as a catalyst for growth
                        </p>
                    </div>
                    <div className={styles.logos}>
                        <h6>our core partners</h6>
                        <ul>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                            <li className={styles.partners}><img src={patner}  alt="logo" /></li>
                        </ul>
                    </div>
                    <div className={styles['home-bottom']}>
                        <div className={styles['scroll-downs']}>
                            <div className={styles.mouse}>
                                <div className={styles.scroller}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['intro-container']}>
                    <div class={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="iAmSwifta"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>#IamSwifta</h2>
                                <p>At Swifta, teamwork is the core of all our processes. We believe that a combination
                                    of teamwork and expertise will yield an outburst of "Extraordinary".
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['services-container']}>
                    <div className={styles.row}>
                            <div className={styles['col-1']}>
                               <h2>Our services</h2>
                                <p>We are a modern company, committed to promote the development of our customers and their
                                    business from the technology's side, providing them access to a global market and supporting
                                    its operations through tailored solutions.
                                </p>
                            </div>
                            <div className={styles['col-2']}>
                                <div className={styles.content}>
                                    <div className={styles.row}>
                                        <div className={styles.block}>
                                            {/*<img src={logo} />*/}
                                            <h5>Business Analysis</h5>
                                            <p>We are a modern company, committed to promote the development
                                                of our customers and their business from the technology's side,
                                            </p>
                                        </div>
                                        <div className={styles.block}>
                                            {/*<img src={logo} />*/}
                                            <h5>Business Analysis</h5>
                                            <p>We are a modern company, committed to promote the development
                                                of our customers and their business from the technology's side,
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.block}>
                                            {/*<img src={logo} />*/}
                                            <h5>Business Analysis</h5>
                                            <p>We are a modern company, committed to promote the development
                                                of our customers and their business from the technology's side,
                                            </p>
                                        </div>
                                        <div className={styles.block}>
                                            {/*<img src={logo} />*/}
                                            <h5>Business Analysis</h5>
                                            <p>We are a modern company, committed to promote the development
                                                of our customers and their business from the technology's side,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </section>
        )
    }
}