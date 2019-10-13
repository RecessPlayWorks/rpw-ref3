import React from 'react';
import {graphql} from 'gatsby';
import {css} from '@emotion/core';
import Layout from '../components/Layout'
import ReadLink from '../components/ReadLink'
import {MDXRenderer} from 'gatsby-plugin-mdx';

export const query = graphql`
query($slug: String!){
    mdx(frontmatter:{slug: { eq: $slug}}){
      frontmatter {
        title
        author
      }
          body
    }
  }
  `;

/* Changing mdx name to "post" */
const PostTemplate = ({data: { mdx: post}}) => (
    <Layout>
        <h1>Post Title:</h1>
        <p
        css={css`
        font-size: 0.65;
        `}
        >Post Author: {post.frontmatter.author}</p>
         <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
)

export default PostTemplate;