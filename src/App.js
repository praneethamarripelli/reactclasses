import React from 'react'

function App() {
  let num = 100;
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        alert(200)
      }}>Click</button>
    </div>
  )
}
export default App