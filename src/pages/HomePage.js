import React, { Fragment } from 'react'
import Article from '../components/Article'

const HomePage = props => {


    const articles = props.articles.map(article => <Article key={article.id} article={article} />)
    return (
        <Fragment>
            {articles}
        </Fragment>
    );
}

export default HomePage;