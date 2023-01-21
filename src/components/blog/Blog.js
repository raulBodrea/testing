import { useState, useEffect } from 'react';
import useBlogPosts from '../../hooks/useBlogPosts/useBlogPosts';

const Blog = () => {
  const { blogPosts, fetchBlogPosts } = useBlogPosts();
  const [query, setQuery] = useState('');
  const [currentBlogPosts, setCurrentBlogPosts] = useState(blogPosts);

  const handleSearch = event => {
    const inputValue = event.target.value;
    const newBlogPosts = filterBlogPosts(blogPosts, inputValue);

    setQuery(inputValue);
    setCurrentBlogPosts(newBlogPosts);
  };

  const filterBlogPosts = (posts, query) =>
    posts.filter(
      blogPost =>
        blogPost.author.includes(query) || blogPost.title.includes(query)
    );

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    const newBlogPosts = filterBlogPosts(blogPosts, query);
    setCurrentBlogPosts(newBlogPosts);
  }, [blogPosts]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        marginTop: '50px',
        borderTop: '2px solid black',
      }}
    >
      <h1>Blog</h1>
      <label htmlFor="search">Search</label>
      <input value={query} onChange={handleSearch} name="search" id="search" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {currentBlogPosts.map(blogPost => (
          <div
            key={blogPost.title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '30px',
            }}
          >
            <img
              src={blogPost.imgUrl}
              alt={`article ${blogPost.title}`}
              style={{ maxWidth: '100px' }}
            />
            <h2 style={{ marginBottom: '0px' }}>{blogPost.title}</h2>
            <h5>{blogPost.author}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
