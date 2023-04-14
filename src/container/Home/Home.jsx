import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../../client';
import { NavBar, Footer } from "../../components";
import hero from "../../assets/hero-lap.svg";
import toast, { Toaster } from 'react-hot-toast';

import './Home.scss';

const formUrl = import.meta.env.VITE_FORM_URL;

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: data,
        headers: {
          accept: "application/json",
        }
      })
      const json = await response.json();

      if (json.status === "success") {
        toast.success("Thanks for subscribing!");
        setEmail("");
      }
    } catch (err) {
      toast.error("Oops! Something went wrong. Please try again later.");
    }
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3] {
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
  
  // console.log(articles);

  return (
    <div>
      <Toaster position='bottom-center' reverseOrder={false} />
      <NavBar />
      <div className="app__home">
        <div className="app__home_content">
          <div className="app__home_content_heading">
            <h2>Join the Tech Revolution with LearnDev's 'HowTo' Blog</h2>
            <p>Your go-to resource for helpful tips, tutorials, and guides on software development and web design. Whether you're a beginner or an experienced developer, we've got you covered.</p>
            <Link to="/articles">Browse Articles</Link>
          </div>
          <div className="app__home_content_cards">
            <div className="cards">
              <div className="first">
                <h5>Open-source goodness</h5>
                <p>LearnDev's "HowTo" Blog is an open-source platform, built and maintained by developers like you and I.</p>
              </div>
              <div className="second">
                <h5>Unlock your coding potential</h5>
                <p>Our blog covers a wide range of topics that will appeal to both beginners and experienced developers.</p>
              </div>
            </div>
            <div className="third">
              <h5>Expert advice at your fingertips</h5>
              <p>Packed with expert tips, tutorials, and guides to help you improve your coding skills and stay up-to-date with the latest technologies and best practices.</p>
            </div>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="app__latest">
        <div className="app__latest_heading">
          <h3>Latest Articles</h3>
          <Link to="/articles">View All</Link>
        </div>
        <div className="app__latest_articles">
          {articles 
          && articles.map((article) => (
            <div key={article.slug.current} className="app__latest_articles_article">
              <img src={article.mainImage.asset.url} alt=""/>
              <div className="app__latest_articles_article-content">
                <div className="app__latest_articles_article-content-text">
                  <h2>{article.title}</h2>
                  <h4>{article.author}</h4>
                  <p>{article.articleSummary.slice(0, 100)}.....</p>
                </div>
                <Link to={`/articles/${article.slug.current}`}>Read Article</Link>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <div className="app__newsletter">
        <h3>Subscribe</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter your email' aria-label='Enter your email' name='email_address' value={email} onChange={handleChange} required/>
          <button>Subscribe</button>
        </form>
        <p>By subscribing you agree to with our <a href="https://learndevfoundation.vercel.app/#/privacy" target="_blank" rel='noopener noreferrer'>Privacy Policy</a></p>
      </div>
      <Footer />
    </div>
  )
}

export default Home;