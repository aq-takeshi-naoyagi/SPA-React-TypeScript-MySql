import React, { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <h2>Articles</h2>
            {articles.map(article => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;

