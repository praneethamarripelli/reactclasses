import React from 'react'
import Product from './Product.js'

function App() {
 

  let prod1 = {
    id:1,
    name:"redmi 8 pro",
    aprice:120000,
    dprice:100000
  }

  return (
    <Product {...prod1}/>
  )
}

export default App
