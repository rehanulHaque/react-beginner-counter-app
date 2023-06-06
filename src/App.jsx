import { useState } from 'react'
import './app.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="container">
      <button onClick={()=>{
        setCount((currentCount)=>{
        return currentCount - 1
      })
      }}>-</button>
      <div className="count">{count}</div>
      <button onClick={()=>{
        setCount((currentCount) =>{
          return currentCount+1
        })
      }}>+</button>
    </div>
    </>
  )
}

export default App
