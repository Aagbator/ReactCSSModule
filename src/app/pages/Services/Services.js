/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Services.css';
import iamswifta from '../../../assets/images/iamswifta.png';

export default class Services extends React.Component{

    render(){
        return(
            <section className={styles.services}>
                <section className={styles['services-intro']}>
                    <div className={styles.content}>
                        <h1>Services</h1>
                        <p>
                            We have successfully delivered on-site and off-site product development
                            (software applications), project management, deployment & integration
                            managed services,to our clients in western, eastern and central Africa.
                        </p>
                    </div>
                </section>
                <section className={styles['section-1']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="iAmSwifta"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Business Analysis</h2>
                                <p>In line with our team of experienced Business Analysts, we are helping businesses recognize and analyze their needs and deliver solutions to organizations strategically in a rapidly changing business environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-2']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="strategy"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Project Management</h2>
                                <p>With hands on application of processes, methods, knowledge and skills, we have helped organizations with initiating, planning, executing, controlling, and closing the work to achieve specific goals and meet specific success criteria at the specified time through experience, to achieve project objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-3']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="iAmSwifta"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Software Application Support</h2>
                                <p>Over years, our IT support professionals have worked to support technical projects like application software, infrastructure software, for local and international companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-4']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="strategy"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Enterprise Software Solution</h2>
                                <p>Our Enterprise software solution are built for (small to) large organizations. It continuously helps  to improve enterprise productivity and efficiency through business logic support functionality, ad also provides business-oriented tools such as online payment processing and automated billing systems for business functions including order processing, accounting and customer relationship management.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-5']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={iamswifta} alt="strategy"/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Mobile Financial Services</h2>
                                <p>
                                    The world has gone mobile so has businesses too.We equip individuals and businesses to drive financial services via mobile.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        )
    }
}