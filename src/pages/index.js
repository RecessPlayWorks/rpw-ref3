import React from 'react';
import Landing from './landing'
// import usePosts from '../hooks/use-posts';
import Layout from '../components/Layout';
// import PostPreview from '../components/PostPreview';

export default () => {
    // const posts = usePosts()
    return (
    <Layout>
        <Landing/>
        {/* <h2>Recent Posts </h2>
        {posts.map((post, idx)=>(
            <PostPreview key={post.slug} post={post} />
            ))} */}
    </ Layout>
)};
