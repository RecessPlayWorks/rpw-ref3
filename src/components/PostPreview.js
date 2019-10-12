import React from 'react';
import { css } from '@emotion/core';
import ReadLink from '../components/ReadLink'

const PostPreview = ({ post }) => {
    return (
        <article css={css`
            font-size: 0.8rem;
            color: #fff;
        `}>
            <h3><ReadLink to={post.slug}>{post.title}</ReadLink></h3>
            <p>{post.excerpt}</p>
            <ReadLink to={post.slug}>read this post</ReadLink>
        </article>
    )
}

export default PostPreview;