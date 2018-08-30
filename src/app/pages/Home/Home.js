/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Home.css';
import patner from '../../../assets/images/partners/partner.png';
import about from '../../../assets/icons/about.png';
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
                    <div className={styles.container}>
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
                        <div className={styles['col-1']}>
                           <h2>Our services</h2>
                            <p>We are a modern company, committed to promote the development of our customers and their
                                business from the technology's side, providing them access to a global market and supporting
                                its operations through tailored solutions.
                            </p>
                        </div>
                        <div className={styles['col-2']}>
                            <div className={styles['block-container']}>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={about} />
                                    </div>
                                    <h5>Business Analysis</h5>
                                    <p>we are helping businesses recognize and analyze their needs
                                        and deliver solutions to organizations strategically in a
                                        rapidly changing business environments.
                                    </p>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={about} />
                                    </div>
                                    <h5>Project Management</h5>
                                    <p>we have helped organizations with initiating, planning, executing,
                                        controlling, and closing the work to achieve specific goals and meet
                                        specific success criteria at the specified time through experience,
                                        to achieve project objectives.
                                    </p>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={about} />
                                    </div>
                                    <h5>Software Application Support</h5>
                                    <p>we have helped organizations with initiating, planning, executing, controlling, and closing the work to achieve specific goals and meet specific success criteria at the specified time through experience, to achieve project objectives..
                                    </p>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={about} />
                                    </div>
                                    <h5>Enterprise Software Solution</h5>
                                    <p>Our Enterprise software solution are built for (small to) large organizations.
                                        It continuously helps to improve enterprise productivity and efficiency through business
                                        logic support functionality
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
            </section>
        )
    }
}