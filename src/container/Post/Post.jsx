import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import PostContent from '../postContent/PostContent';
import { NavBar, Footer } from '../../components';

import changeTitle from '../../../changeTitle';
import './Post.scss'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Post = () => {
  const [postData, setPostData] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            author,
            twitterLink,
            body
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);
  
  // console.log(postData);

  changeTitle("HowTo Guide | Read");

  if (!postData) return <h1 className="app__onepost-loading">Loading....</h1>

  return (
    <div className="app__onepost">
        <NavBar />
        <div className="app__onepost-article">
          <div className="app__onepost-article_metadata">
            <img
              src={urlFor(postData.mainImage).url()}
              alt="Post Image"
            />
            <h2>
              {postData.title}
            </h2>
            <h4>
              <a href={postData.twitterLink} target="_blank" rel='noreferrer'>{postData.author}</a> 
            </h4>
          </div>
          <div className="app__onepost-article_content">
            <PostContent postData={ postData } />
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Post;
