import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import ProductsListPage from '../pages/ProductsListPage'
import PanelClientPage from '../pages/PanelClientPage'
import NotFoundPage from '../pages/NotFoundPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import '../styles/Page.css'

class Page extends Component {
    state = {
        products: [
            {
                id: 0,
                title: 'Lalka',
                author: 'Bolesław Prus',
                price: 19.49,
                publishingHouse: 'SBM Renata Gmitrzak',
                release: '2019-01-21',
                pages: 672,
                available: true,
            },
            {
                id: 1,
                title: 'Wesele',
                author: 'Stanisław Wyspiański',
                price: 10.99,
                publishingHouse: 'Wydawnictwo GREG',
                release: '2019-03-19',
                pages: 240,
                available: true,
            },
            {
                id: 2,
                title: 'Ferdydurke',
                author: 'Witold Gombrowicz',
                price: 30.99,
                publishingHouse: 'Wydawnictwo Literackie',
                release: '2012-04-12',
                pages: 296,
                available: true,
            },
            {
                id: 3,
                title: 'Sklepy cynamonowe',
                author: 'Bruno Schulz',
                price: 30.99,
                publishingHouse: 'Wydawnictwo Mg',
                release: '2013-01-24',
                pages: 256,
                available: false,
            },
            {
                id: 4,
                title: 'Inny świat',
                author: 'Gustaw Herling-Grudziński',
                price: 30.99,
                publishingHouse: 'Wydawnictwo Literackie',
                release: '2019-04-10',
                pages: 356,
                available: true,
            },
            {
                id: 5,
                title: 'Tango',
                author: 'Sławomir Mrożek',
                price: 18.99,
                publishingHouse: 'Oficyna Literacka Noir sur Blanc',
                release: '2014-09-24',
                pages: 208,
                available: false,
            },
            {
                id: 6,
                title: 'Kartoteka',
                author: 'Tadeusz Różewicz',
                price: 59.99,
                publishingHouse: 'Wydawnictwo Dolnośląskie',
                release: '2001-12-11',
                pages: 92,
                available: true,
            },
        ],
        articles: [
            {
                id: 0,
                author: 'Henryk Sienkiewicz',
                title: 'Quo Vadis',
                txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolorem quam sapiente ipsum nisi quaerat, modi similique itaque velit vel est, nobis minima voluptate aspernatur. Natus quod placeat quasi saepe, vel, repudiandae obcaecati nam est illo soluta nostrum aut enim suscipit aperiam dicta, explicabo tempore perspiciatis reprehenderit itaque asperiores fuga!'
            },
            {
                id: 1,
                author: 'Jan Kochanowski',
                title: 'Treny',
                txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolorem quam sapiente ipsum nisi quaerat, modi similique itaque velit vel est, nobis minima voluptate aspernatur. Natus quod placeat quasi saepe, vel, repudiandae obcaecati nam est illo soluta nostrum aut enim suscipit aperiam dicta, explicabo tempore perspiciatis reprehenderit itaque asperiores fuga!'
            },
            {
                id: 2,
                author: 'Juliusz Słowacki',
                title: 'Balladyna',
                txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolorem quam sapiente ipsum nisi quaerat, modi similique itaque velit vel est, nobis minima voluptate aspernatur. Natus quod placeat quasi saepe, vel, repudiandae obcaecati nam est illo soluta nostrum aut enim suscipit aperiam dicta, explicabo tempore perspiciatis reprehenderit itaque asperiores fuga!'
            },
            {
                id: 3,
                author: 'Adam Mickiewicz',
                title: 'Pan Tadeusz',
                txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem dolorem quam sapiente ipsum nisi quaerat, modi similique itaque velit vel est, nobis minima voluptate aspernatur. Natus quod placeat quasi saepe, vel, repudiandae obcaecati nam est illo soluta nostrum aut enim suscipit aperiam dicta, explicabo tempore perspiciatis reprehenderit itaque asperiores fuga!'
            },
        ]
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => <HomePage articles={this.state.articles} />} />
                <Route path="/products" render={() => <ProductsListPage products={this.state.products} />} />
                <Route path="/product/:id" render={(props) => <ProductPage {...props} products={this.state.products} />} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/panel-client" component={PanelClientPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}

export default Page;