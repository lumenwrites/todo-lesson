import { useState } from "react"

const DEFAULT_TODOS = [
  "Walk the dog",
  "Pick up the milk",
  "Find true love"
]

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [inputValue, setInputValue] = useState("")

  function addItem() {
    setTodos((prev) => [...prev, inputValue])
    setInputValue("")
  }

  function removeItem(idx) {
    setTodos((prev) => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="todo-list">
      {todos.map((item, idx) => (
        <div
          className="item"
          key={idx}
          onClick={() => removeItem(idx)}
        >
          {item}
        </div>
      ))}
      {/* <div className="item">{inputValue}</div> */}
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default App
