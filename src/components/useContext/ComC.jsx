import React, { useContext } from 'react'
import { Biodata } from './ComA'

const ComC = (name) => {
  const context = useContext(Biodata)
  return (
    <>
      <h1>Hello Comp C {context}</h1>

    </>
  )
}

export default ComC