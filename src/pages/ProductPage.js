import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css'

const ProductPage = props => {

    const index = props.match.params.id;
    const product = props.products[index];

    return (
        <section className='bookPage'>
            <h1>{`„${product.title}” - ${product.author}`}</h1>
            <div className="bookContent">
                <div className="bookImg">
                    <div>Grafika książki{/* img book */}</div>
                </div>
                <div className="bookDesc">
                    <h2 style={{ display: 'inline-block', marginRight: '30px' }}>Szczegóły:</h2>
                    <table className="books">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Autor:</td>
                                <td>{product.author}</td>
                            </tr>
                            <tr>
                                <td>Tytuł:</td>
                                <td>{product.title}</td>
                            </tr>
                            <tr>
                                <td>Wydawnictwo:</td>
                                <td>{product.publishingHouse}</td>
                            </tr>
                            <tr>
                                <td>Data premiery:</td>
                                <td>{product.release}</td>
                            </tr>
                            <tr>
                                <td>Liczba stron:</td>
                                <td>{product.pages}</td>
                            </tr>
                            <tr>
                                <td>Cena:</td>
                                <td>{product.price} <em> zł</em></td>
                            </tr>
                        </tbody>
                    </table>
                    {product.available ? <em style={{ fontWeight: 'bold', color: 'green' }}>Produkt dostępny</em> : <em style={{ fontWeight: 'bold', color: 'red' }}>Produkt niedostępny</em>}
                </div>
            </div>
            <Link to='/products'>Powrót do listy produktów</Link>
        </section>
    );
}

export default ProductPage;