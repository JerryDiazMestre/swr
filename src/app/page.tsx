import React from 'react'
import Header from './components/Header';

export default function Page() {
  return (
    <>
      <Header />
      <p>
        useSWR is a React Hook that makes it easy to fetch data from a remote API and update your UI with the lastest data. It uses a strategy called stale-while-revalidate, which means that it will first return the data from cache (if available), then send a fetch request to get the latest data, and finally update the UI with the new data.
      </p>
    </>
  )
}
