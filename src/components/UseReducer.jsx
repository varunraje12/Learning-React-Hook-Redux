import React, { useReducer } from 'react'

const initialstate = 0

const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === "INCREMENT") {
    return state + 1
  } if (action.type === "DECREMENT") {
    return state - 1
  }
  return state
}

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </>
  )
}

export default UseReducer