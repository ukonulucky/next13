
import React from 'react'
import {notFound} from "next/navigation"


  async function SearchFunc(data){
  const res = await fetch(`https://serpapi.com/search.json?q=${data}&api_key=${process.env.API__KEY }`)
  const mySearch = await res.json()
 
return mySearch.organic_results
  }
  
async function SearchResult(props) {

   const searchData = props?.params.searchResult

   if(!searchData) return notFound()
    const searchResult = await SearchFunc(searchData)
    console.log(searchResult)
  return (
    <div>
    {
      searchResult ? searchResult.map(i => {
      return <div className="flex space-x-3" key={i.position}>
          <h2 className="font-bold text-blue-300">
          {i.title}
        </h2>
        <p className="text-green-500 font-bold">
          {
            i.snippet
          }
        </p>
      </div>
      }):
      <div></div>
    }
    </div>
  )
}

export default SearchResult