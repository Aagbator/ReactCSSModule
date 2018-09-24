/**
 * Created by Anthony on 14/08/2018.
 */

import React from 'react';
import styles from './Products.css';

export default class Products extends React.Component{

    render(){
        return(
            <section className={styles.products}>
                <section className={styles['products-intro']}>
                    <div className={styles.content}>
                        <h1>Products</h1>
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
                                    <img src={require(`../../../assets/images/products/omnibranches.png`)} alt='omnibranches'/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Omnibranches</h2>
                                <p>OmniBranches is a Managed Agent Network that allows financial services providers to immediately launch an agent platform to provide agency banking services through an aggregate network of agents where these agents will be able to provide your services to end users.
                                </p>
                                <a rel="noopener noreferrer" href="http://portal.omnibranches.com" target="_blank" className={`${styles.button} ${styles['btn-dark']}`}>Visit Website <i className={`fas fa-external-link-alt`}></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-2']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={require(`../../../assets/images/products/onerecharge.png`)} alt='onerecharge'/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>OneRecharge</h2>
                                <p> is a one-stop value added service and bill payment platform across Africa to offer services such as Bill Payment, Airtime Purchase and other hosted services.
                                </p>
                                <a rel="noopener noreferrer" href="http://onerecharge.com" target="_blank" className={`${styles.button} ${styles['btn-light']}`}>Visit Website <i className={`fas fa-external-link-alt`}></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-3']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={require(`../../../assets/images/products/mfisa.png`)} alt='mfisa'/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>MFiSA</h2>
                                <p> Also known as Mobile Financial Service Aggreggator is a pan african payment channel solution that allows collection of funds from anywhere through bank account, Card, Payment links, USSD, QR Code etc
                                </p>
                                <a rel="noopener noreferrer" href="http://mfisa.com" target="_blank" className={`${styles.button} ${styles['btn-dark']}`}>Visit Website <i className={`fas fa-external-link-alt`}></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles['section-4']}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles['col-1']}>
                                <div className={styles['img-container']}>
                                    <img src={require(`../../../assets/images/products/ecommerce.png`)} alt='ecommerce'/>
                                </div>
                            </div>
                            <div className={styles['col-2']}>
                                <h2>Marketplace solution</h2>
                                <p> Ours is a flexible, adaptable Multi Merchant e-commerce software that integrates with multiple payment gateways including Paypal, Mobile money, Cards, Bank accounts, Local switches etc.
                                </p>
                                <a rel="noopener noreferrer" href="" target="_blank" className={`${styles.button} ${styles['btn-light']}`}>Visit Website <i className={`fas fa-external-link-alt`}></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}