import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
        <div className="d-flex flex-row justify-content-between my-3">
            <h1 className="text-blue">Posts Lab</h1>
            <Link className="text-blue" href="/posts">Posts</Link>
        </div>
    </>
    
)
}
