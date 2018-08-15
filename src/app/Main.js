/**
 * Created by Anthony on 13/08/2018.
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './Main.css';
import Navigation from './components/Nav/Navigation';


import Home from './pages/Home/Home';
import About from './pages/About/About';

export default class Main extends React.Component {
    render () {
        return (
            <div className={styles.wrapper}>
                <Navigation />
                <section className={styles.main_section}>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        {/* <Route path="/contact" component={Contact}/> */}
                        {/* <Route path="/portfolio" component={Portfolio}/> */}
                        {/* <Route path='*' component={NotFound} /> */}
                    </Switch>
                </section>
            </div>
        )
    }
}