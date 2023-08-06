'use client'
import React from 'react'
import { Post } from '../model/Post';
import Link from 'next/link';
import useSWR, { Key, SWRConfig } from 'swr';
import { fetcher } from '../api/api';
import AddPost from '../components/AddPost';
import Header from '../components/Header';

export default function Page() {
    const { data, error, isLoading } = useSWR<Post[]>('/posts', fetcher)
    if (data) return (
        <>
            <Header />

            <AddPost />

            <ul>
                {data?.map(({ id, title, body }, index) => {
                    return (
                            <li key={index}>
                                <div>
                                    <Link href={`/posts/${id}`}>{title}</Link>
                                    <p className='py-threequarter'>{body}</p>
                                </div>
                            </li>
                        )
                })}
            </ul>
        </>
    )
}
