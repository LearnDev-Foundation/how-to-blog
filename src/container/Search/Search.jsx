import React, { useState, useEffect } from 'react';
import sanityClient from '../../../client';
import { NavBar, Footer } from '../../components';
import { Link } from 'react-router-dom';

import './Search.scss';
import { images } from "../../constants"

import changeTitle from '../../../changeTitle';

const Search = () => {
  const [articles, setArticles] = useState(null);
  const [query, setQuery] = useState("")

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
          author
        }`
      )
      .then((data) => setArticles(data))
      .catch(console.error);
  }, [])

  // console.log(articles);

  changeTitle("HowTo Guide | Search");

  return (
    <div className='app__search'>
        <NavBar />
        <div className="app__search-header">
          <div className="app__search-header_search">
            <h1 className="app__search-header_search-text">
              Search
            </h1>
            <input type="text" className='app__search-header_search-input' onChange={event => setQuery(event.target.value)} />
          </div>
        </div>

        <div className="app__search-articles">
          {articles &&
            articles.filter(article => {
              if (query === "") {
                return article;
              } else if (article.title.toLowerCase().includes(query.toLowerCase())) {
                return article;
              }
            }).map((article, index) => (
              <Link to={"/" + article.slug.current} key={article.slug.current}>
                <div className="app__search-articles_article" key={index}>
                  <img 
                    src={article.mainImage.asset.url}
                    alt="Article Image"
                    className='app__search-articles_article-img'
                  />
                  <div className="app__search-articles_article-author">
                    {article.author}
                  </div>
                  <div className="app__search-articles_article-title">
                    {article.title}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>

        <Footer />
    </div>
  )
}

export default Search