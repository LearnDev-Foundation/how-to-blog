import React, { useState, useEffect } from 'react';
import { NavBar } from '../../components';
import sanityClient from '../../../client';
import { useLocation } from 'react-router-dom';

const Search = (props) => {
  const location = useLocation();

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

  console.log(location.search.slice(8))
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default Search;