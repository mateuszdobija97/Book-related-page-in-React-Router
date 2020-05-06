import React, { Fragment } from 'react';
import '../styles/Header.css'
// images from pixabay.com
import book1 from '../images/book1.PNG'
import book2 from '../images/book2.PNG'
import book3 from '../images/book3.PNG'
import book4 from '../images/book4.PNG'
import book5 from '../images/book5.PNG'
import { Route, Switch } from 'react-router-dom'

const Header = () => {

    return (
        <Fragment>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={book1} alt="book1" />
                )} />
                <Route path="/products" render={() => (
                    <img src={book2} alt="book2" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={book3} alt="book3" />
                )} />
                <Route path="/panel-admin" render={() => (
                    <img src={book4} alt="book4" />
                )} />
                <Route render={() => (
                    <img src={book5} alt="book5" />
                )} />
            </Switch>
        </Fragment>

    );
}

export default Header;