import React from 'react';
import { Link } from "react-router-dom";
import sanityClient from "../../client";

const allPost = () => {
  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog post page!
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {}
        </div>
      </div>
    </div>
  )
}

export default allPost