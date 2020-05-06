import React from 'react';

const Article = props => {
    return (
        <article>
            <h1>{`„ ${props.article.title} ”`}</h1>
            <h2>{props.article.author}</h2>
            <p>{props.article.txt}</p>
        </article>
    );
}

export default Article;