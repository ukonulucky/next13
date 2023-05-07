import React from 'react'
import Link from 'next/link'

const fetchTodo = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos")
 const data= await resp.json()
 return data.slice(1,11)
}

async function TodoList() {
    const todos = await fetchTodo()
  return (
    <div>
        {
            todos.map((i,j) => 
            <Link href={`/todos/${i.id}`} key={j}>
           <p>
           {
              i.title
            }
           </p>
        </Link>
        )
        }
    </div>
  )
}

export default TodoList