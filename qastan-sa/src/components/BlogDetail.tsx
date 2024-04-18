import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetail from './HeaderDetail';
import { blogPosts } from '../Data/DataBlog';
import BlogDetailIntro from './BlogDetailIntro';
import BlogArticle from './BlogArticle';

function BlogDetail() {
    const { id } = useParams<{ id: string }>();
    const blogId = id?.split('~')[0] || 0;
    const blog = blogPosts.find(b => b.id.toString() === blogId.toString());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <>
            <HeaderDetail blog={blog} />
            <BlogDetailIntro blog={blog} />
            <BlogArticle blog={blog} />
        </>
    );
}

export default BlogDetail;
