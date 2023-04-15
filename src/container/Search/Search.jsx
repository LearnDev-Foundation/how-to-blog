import React, { useState, useEffect } from 'react';
import { NavBar } from '../../components';
import sanityClient from '../../../client';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Search.scss';

const Search = (props) => {
  const location = useLocation();

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

  const searchTerm = location.search.slice(8).replace("%20", " ");
  // console.log(articles);

  return (
    <div>
      <NavBar />
      <div className="app__search">
        <div className="app__search_title">
          <h2>You Searched: "{searchTerm}"</h2>
        </div>
        <div className="app__search_result">
          {articles && articles.map((article) => (
            <div key={article.slug.current} className="app__search_result-article">
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search;