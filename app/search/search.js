"use client"

import {useRouter} from "next/navigation"

import React, {useState} from 'react'

function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSearch  = (e) => {
        console.log(search)
        e.preventDefault()
        setSearch("")
        router.push(`search/${search}`)

    }

  return (
    <div>
        <form onSubmit={handleSearch} className="flex space-x-1 items-center mt-3">
            <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="search items"
            />
             <input
            type="button"
            value="Submit"
            className="rounded-lg font-bold textt-center bg-blue-500 text-white p-2"
            />


        </form>
    </div>
  )
}

export default Search