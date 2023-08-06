import { Key } from 'swr';
import { Post } from '../model/Post';

const fetcher = async (key: Key) => {
    const ret = await fetch(`http://localhost:3001${key}`);
    if (!ret.ok){
        const error = Error('Houston, we have a big problem while retrieving the data');
        error.message = await ret.json();
        return error;
    }

    return await ret.json();
}

const postNewPost = async (body: Partial<Post>) => {
    const r = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return await r.json();
};

export { fetcher, postNewPost };