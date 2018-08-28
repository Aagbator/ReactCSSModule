/**
 * Created by Anthony on 13/08/2018.
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './Main.css';
import Navigation from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Training from './pages/Training/Training';
import Contact from './pages/Contact/Contact';

export default class Main extends React.Component {

    componentDidUpdate() {
        window.scrollTo(0,0); // Always keep page position at the top on load
    }

    render () {
        return (
            <div className={styles.wrapper}>
                <Navigation />
                <section className={styles.main_section}>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/training" component={Training}/>
                        <Route path="/contact" component={Contact}/>
                        {/* <Route path='*' component={NotFound} /> */}
                    </Switch>
                </section>
                <Footer />
            </div>
        )
    }
}