/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Home.css';

export default class Home extends React.Component{
    render(){
        return(
            <section className={styles.home}>
                <section className={styles['home-container']}>
                    <div className={styles.content}>
                        <h1>We Provide innovative approach to technology solutions across Africa</h1>
                        <p>
                            We are committed to the future of Africa enterprises while
                            leveraging sophisticated technology as a catalyst for growth
                        </p>
                    </div>
                    <div className={styles.logos}>
                        <h6>our core partners</h6>
                        <ul>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/google.png')}  alt="google" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/binu.png')}  alt="binu" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/verifone.png')}  alt="verifone" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/visa.png')}  alt="visa" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/huwaei.png')}  alt="huwaei" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/verifone.png')}  alt="verifone" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/oracle.png')}  alt="oracle" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/vericash.png')}  alt="vericash" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/mtn.png')} alt="mtn" /></li>
                            <li className={styles.partners}><img src={require('../../../assets/images/partners/flutterwave.png')}  alt="flutterwave" /></li>
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
                                    <img src={require('../../../assets/images/iamswifta.svg')} alt="iAmSwifta"/>
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
                            <p>We are a modern company, committed to promoting the development of our customers and their
                                business from the technology side; providing them access to a global market and supporting
                                its operations through tailored solutions.
                            </p>
                        </div>
                        <div className={styles['col-2']}>
                            <div className={styles['block-container']}>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={require('../../../assets/icons/business analysis.svg')} />
                                    </div>
                                    <h5>Business Analysis</h5>
                                    <p>Our experienced Business Analysts are helping businesses recognize and
                                        analyze their needs and deliver solutions strategically.
                                    </p>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={require('../../../assets/icons/project management.svg')} />
                                    </div>
                                    <h5>Project Management</h5>
                                    <p>With hands on application of processes, methods, knowledge and skills,
                                        we have helped organizations with initiating, planning, executing,
                                        and closing the work to achieve project objectives globally.
                                    </p>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={require('../../../assets/icons/support.svg')} />
                                    </div>
                                    <h5>Software Application Support</h5>
                                    <p>Over the years, our IT support professionals have worked efficiently to support technical projects and
                                        solutions like application software, infrastructure software etc., for local  and international companies as well
                                        as  large multinational corporations
                                    </p>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles['img-container']}>
                                        <img alt="logo" src={require('../../../assets/icons/enterprise software.svg')} />
                                    </div>
                                    <h5>Enterprise Software Solution</h5>
                                    <p>Our Enterprise software solutions are built for small to large organizations
                                        to improve productivity,
                                        efficiency and provide critical solutions to organizational tasks as a whole.
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
            </section>
        )
    }
}