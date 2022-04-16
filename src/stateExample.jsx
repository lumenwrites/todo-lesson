import React, { useState } from 'react'

export default function MyComponent() {
  const [name, setName] = useState("Jeff")
  return (
    <div>
      {name}
      <button onClick={() =>
        setName("Bob")
      }>
        Set Name
      </button>
    </div>
  )
}


export default function stateExample() {
  const [name, setName] = useState("Jeff")
  const [counter, setCounter] = useState(0)
  const [todoItems, setTodoItems] = useState([])

  const [a, b, c] = [name, counter, todoItems]
  setName("")
  setCounter(1)
  setTodoItems([])

  return (
    <div>stateExample</div>
  )
}

export default class MyComponent extends Component {
  state = { name: "Jeff" }
  
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() =>
          this.setState({ name: "Bob" })
        }>
        Set Name
      </button>
    </div>
    )
  }
}


export default function Counter() {
  const [counter, setCounter] = useState(0)

  function updateCounter() {
    setCounter((prevState) => {
      return prevState + 1
    })
  }
  
  return (
    <div>
      {counter}
      <button onClick={updateCounter}>
        Increment
      </button>
    </div>
  )
}

const arr = ["a", "b", "c"]
console.log(arr[0]) // a
console.log(arr[1]) // b

const [firstElement, secondElement] = arr
console.log(firstElement) // a
console.log(secondElement) // b


