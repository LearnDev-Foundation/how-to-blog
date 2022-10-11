import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
import PostContent from '../postContent/PostContent';

import changeTitle from '../../../changeTitle';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const onePost = () => {
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
            body,
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);
  
  // console.log(postData);

  changeTitle("HowTo Guide | Read");

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-12">
      <div className="container shadow-lg mx-auto rounded-lg">
        <div className="relative">
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
          <div className="h-full w-full flex items-center justify-center">
            {/* Title Section */}
            <div className="bg-black p-5 w-full">
              <div className='flex justify-center'>
                <h2 className="cursive text-3xl lg:text-6xl mb-4 text-white">
                  {postData.title}
                </h2>
              </div>
              <div className="flex justify-center text-gray-800">
                <h4 className="cursive bg-red-700 px-6 py-4 rounded text-white flex items-center pl-2 text-2xl">
                  <a href={postData.twitterLink} target="_blank" rel='noreferrer'>{postData.author}</a> 
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <PostContent postData={ postData } />
        </div>
      </div>
    </div>
  );
}

export default onePost
