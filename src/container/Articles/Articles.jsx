import React, { useState, useEffect } from 'react';
import { NavBar, Footer } from '../../components';
import sanityClient from '../../../client';
import { Link } from 'react-router-dom';

import './Articles.scss';

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"] | order(publishedAt desc) {
                    title,
                    slug,
                    mainImage{
                      asset->{
                        _id,
                        url
                        
                      }
                    },
                    author,
                    articleSummary,
                }`
            )
            .then((data) => setArticles(data))
            .catch(console.error);
    }, [])
  return (
    <div>
        <NavBar />
        <div className="app__articles">
            <div className="app__articles_title">
                <h2>Articles</h2>
            </div>
            <div className="app__articles_allArticles">
                {articles && articles.map((article) => {
                    return (
                        <div key={article.slug.current} className="app__articles_allArticles-article">
                            <img src={article.mainImage.asset.url} alt="" />
                            <div className="content">
                                <div className="text">
                                    <h2>{article.title}</h2>
                                    <h4>{article.auhor}</h4>
                                    <p>{article.articleSummary.slice(0, 100)}.....</p>
                                </div>
                                <Link to={`/articles/${article.slug.current}`}>Read Article</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Articles;