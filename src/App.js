import { useState } from 'react'

const DEFAULT_TODOS = [
  {
    done: false,
    content: 'Pick up the milk',
  },
  {
    done: false,
    content: 'Pick up the milk',
  },
  {
    done: false,
    content: 'Pick up the milk',
  },
]

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [inputValue, setInputValue] = useState('')

  function addItem() {
    const newItem = {
      done: false,
      content: inputValue,
    }
    setTodos((prev) => [...prev, newItem])
    setInputValue('')
  }

  function removeItem(idx) {
    setTodos((prev) => prev.filter((_, i) => i !== idx))
  }

  return (
    <div className="todo-list">
      {todos.map((item, idx) => (
        <div className="item" key={idx} onClick={() => removeItem(idx)}>
          {item.content}
        </div>
      ))}
      <div className="item">{inputValue}</div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default App
