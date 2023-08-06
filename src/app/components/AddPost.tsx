import { postNewPost } from '@/app/api/api'
import { Post } from '@/app/model/Post'
import React, { FormEvent, useState } from 'react'
import { useSWRConfig } from 'swr'

export default function AddPost() {
    const [newPost, setNewPost] = useState<Partial<Post>>({
        title: '', body: ''
    })
    const { mutate } = useSWRConfig();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await postNewPost(newPost);
        e.target.reset(); // it works however an error is displayed on IDE

        mutate('/posts');
    }

    return (
        <>
            <div>
                <h2>Make a new post</h2>
                <form onSubmit={handleSubmit} className='p-2'>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input
                            type="text"
                            name="title"
                            onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor='body'>Body:</label>
                        <textarea
                            name="body"
                            onChange={(e) => setNewPost((prev) => ({ ...prev, body: e.target.value }))} />
                    </div>
                    <br />
                    <div>
                        <button type="submit" className='px-1 py-half'>Add Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}
