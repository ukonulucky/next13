import React from 'react'
import {notFound } from "next/navigation"




export const dynamicParams = true
async function fetchTodo (todoId){
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, 
  // {cache:"force-cache"}
  {next: {revalidate: 60}}
  )
  const data = await res.json()
  return data
} 
async function page(props) {
  console.log(props)
  const todoId = props?.params.todo
 const todo = await fetchTodo(todoId)
 const {title, completed, id} = todo
 console.log(todo)
 if(!id) return notFound()
  return (
    <div>
      <p className="text-blue-300 p-3">{title}</p>
      {
      completed ? <p className="text-green-500 p-3 font-bold my-3">Yes task has been completed : id  {id}</p> : <p className="text-red-300 p-3 my-3"> 
        Task has not being completed : id  {id}
      </p>
      }
    </div>
  )
}

export  async function generateStaticParams(){
  const res = await  fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  const trimedData = data.slice(1, 11)
  console.log("this is the data",trimedData)
return trimedData.map(todo =>  {
    return {
      todo: todo.id.toString()
    }
  }
)

}

export default page