import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductsList.css'

const ProductsListPage = props => {

    const list = props.products.map(product => (

        <tr key={product.id}>

            <td>{product.author}</td>
            <td>{product.title}</td>
            <td>
                <Link to={`/product/${product.id}`}>
                    Szczegóły
                </Link>
            </td>
        </tr>
    ))

    return (
        <div className="products">
            <h2>Lista książek:</h2>
            <table className="books">
                <thead>
                    <tr>
                        <th>Autor: </th>
                        <th>Tytuł: </th>
                        <th>Opcje: </th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsListPage;