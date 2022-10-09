import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../../client';
import { NavBar, Footer } from "../../components";

import './Home.scss';

const Home = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...4] {
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
  }, [])
  
  // console.log(articles);

  return (
    <div className='app__home'>
      <NavBar />
      
      <div className="app__home-welcome">
        <div className="app__home-welcome_title">
          Welcome
        </div>
        <div className="app__home-welcome_text">
          We are so glad you're here. You are now part of a growing community of readers and writers, who create, contribute and collaborate with each other via LearnDev Foundation.
        </div>
        <button className="app__home-welcome_button">
          Get Started
        </button>
      </div>
      <div className="app__home-latest">
        <div className="app__home-latest_heading">
          <div className="app__home-latest_heading-title">
            Latest Articles
          </div>
          <div className="app__home-latest_heading-text">
            View All
          </div>
        </div>
        <div className="app__home-latest_articles">
          {articles &&
            articles.map((article, index) => (
              <Link to={"/" + article.slug.current} key={article.slug.current}>
                <div className="app__home-latest_articles-article" key={index}>
                  <img 
                    src={article.mainImage.asset.url} 
                    alt="Article Image" 
                    className="app__home-latest_articles-article-img" 
                  />
                  <div className="app__home-latest_articles-article-author">
                    {article.author}
                  </div>
                  <div className="app__home-latest_articles-article-title">
                    {article.title}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home