import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import sanityClient from "../../../client";
import { NavBar, Footer } from "../../components";

import "./AllPost.scss"
import changeTitle from "../../../changeTitle";

const allPost = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            author,
          }`
      )
      .then((data) => setArticles(data))
      .catch(console.error);
  }, []);

  // console.log(allPostsData);

  changeTitle("HowTo Guide | Articles")

  return (
    <div className='app__allposts'>
      <NavBar />
      <div className="app__allposts-header">
        <h1>All Articles</h1>
      </div>

      <div className="app__allposts-articles">
        {articles &&
          articles.map((article, index) => (
            <Link to={"/" + article.slug.current} key={article.slug.current}>
              <div className="app__allposts-articles_article" key={index}>
                <img
                  src={article.mainImage.asset.url}
                  alt="Article image"
                  className="app__allposts-articles_article-img"
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

export default allPost