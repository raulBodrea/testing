import { renderHook, act } from '@testing-library/react';
import useBlogPosts from './useBlogPosts';

describe('useBlogPosts', () => {
  beforeEach(() => {
    global.fetch = jest.fn(async () => {
      return {
        json: async () => [
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
        ],
      };
    });
  });

  it('fetches blogPosts', async () => {
    const { result } = renderHook(useBlogPosts);
    await act(async () => result.current.fetchBlogPosts());
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:8000/', {
      mode: 'cors',
    });
  });

  it('updates the initial state and returns blog data', async () => {
    const { result } = renderHook(useBlogPosts);
    expect(result.current.blogPosts).toHaveLength(0);
    await act(async () => result.current.fetchBlogPosts());
    expect(result.current.blogPosts).toHaveLength(2);
  });
});
