import React, { useState } from 'react'
import useCount from '../hooks/useCount'

const Test = () => {

  const [count, setCount] = useState(0)


  // Custom Hook
  useCount(count);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Test</button>
      <button onClick={() => setCount(count - 1)}>Decrease Test</button>
    </>
  )
}

export default Test