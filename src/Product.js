import React from 'react'

function Product({id,name,aprice,dprice}) {
  return (
    <div>
    <h2>Id:{id}</h2>
    <h2>Name:{name}</h2>
    <h2>Actualprice:{aprice}</h2>
    <h2>Discountprice:{dprice}</h2>
    </div>
  )
}

export default Product
