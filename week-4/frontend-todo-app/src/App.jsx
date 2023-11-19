import { useState } from 'react'
import './App.css'

// var todos = [{
//   title: "go to gym",
//   description: "go to gym",
//   id: 1
// },{
//   title: "work hard",
//   description: "never give up",
//   id: 2
// }]

// var todo = {
//   title: "go to gym",
//   description: "go to gym",
//   id: 1
// }
function App() {
  const [todo, setTodo ] = useState({
    title: "go to ",
    description: "go to gyjjgjkghm",
    id: 1
  });
  return(
    <>
      <h1>Hii there !</h1>
      {todo.title}
      {todo.description}
      {todo.id}
    </>
  )
}

export default App
