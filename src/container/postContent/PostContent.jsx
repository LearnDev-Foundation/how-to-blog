import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from "../../../client";

import './PostContent.scss';

const PostContent = ({ postData }) => {

  return (
    <BlockContent
      blocks={postData.body.slice(0, 50)}
      projectId={sanityClient.clientConfig.projectId}
      dataset={sanityClient.clientConfig.dataset}
    />
  )
}

export default PostContent
