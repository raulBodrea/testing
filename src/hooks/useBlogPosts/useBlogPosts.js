import { useState } from 'react';

const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    const response = await fetch('http://localhost:8000/', { mode: 'cors' });
    const blogPostsResponse = await response.json();
    setBlogPosts(blogPostsResponse);
  };

  return { fetchBlogPosts, blogPosts };
};

export default useBlogPosts;
