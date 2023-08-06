'use client'
import { fetcher } from "@/app/api/api";
import Header from "@/app/components/Header";

import { Post } from "@/app/model/Post";
import Link from "next/link";
import useSWR from "swr";

type Props = {
    params: { id: string }
}


export default function Page({ params }: Props) {
    const { data } = useSWR<Post>(`/posts/${params.id}`, fetcher)
    return (
        <>
            <Header />

            <div>
                <h1>{data?.title}</h1>
                {data?.body}
            </div>
        </>
    )
}
