import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

jest.mock('../../hooks/useBlogPosts/useBlogPosts.js', () => {
  let blogPosts = [];

  const useBlogPosts = () => {
    const fetchBlogPosts = async () => {
      blogPosts = [
        {
          title: 'Blog post no 0',
          author: 'author #3',
          imgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        },
        {
          title: 'Blog post no 1',
          author: 'author #4',
          imgUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        },
      ];
    };

    return { blogPosts, fetchBlogPosts };
  };

  return useBlogPosts;
});

describe('Blog', () => {
  it('renders blog title', () => {
    render(<Blog />);
    const title = screen.queryByText('Blog');
    expect(title).not.toBeNull();
  });

  it('renders search input element', () => {
    render(<Blog />);
    const inputEl = screen.queryByLabelText('Search');
    expect(inputEl).not.toBeNull();
  });

  it('renders blog posts', () => {
    render(<Blog />);

    const blogPost1 = screen.queryByText('Blog post no 0');
    const blogPost2 = screen.queryByText('Blog post no 1');

    expect(blogPost1).not.toBeNull();
    expect(blogPost2).not.toBeNull();
  });

  it('renders blog post', () => {
    render(<Blog />);

    const image = screen.queryByAltText('article Blog post no 0');
    const title = screen.queryByText('Blog post no 0');
    const author = screen.queryByText('author #3');

    expect(image).not.toBeNull();
    expect(title).not.toBeNull();
    expect(author).not.toBeNull();
  });

  it('updates blog posts based on query', async () => {
    render(<Blog />);
    const user = userEvent.setup();
    const inputEl = screen.queryByLabelText('Search');

    await user.type(inputEl, '0');
    let blogPost1 = screen.queryByText('Blog post no 0');
    let blogPost2 = screen.queryByText('Blog post no 1');
    expect(blogPost1).not.toBeNull();
    expect(blogPost2).toBeNull();

    await user.clear(inputEl);
    blogPost1 = screen.queryByText('Blog post no 0');
    blogPost2 = screen.queryByText('Blog post no 1');
    expect(blogPost1).not.toBeNull();
    expect(blogPost2).not.toBeNull();

    await user.type(inputEl, '1');
    blogPost1 = screen.queryByText('Blog post no 0');
    blogPost2 = screen.queryByText('Blog post no 1');
    expect(blogPost1).toBeNull();
    expect(blogPost2).not.toBeNull();
  });
});
