import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        msg: 'increment',
      }
    case 'decrement':
      return {
        count: state.count -1,
        msg: 'decrement',
      }
    default:
      return state
  }
}

export const CompB = props => {
  const [state, dispatch] = useReducer(reducer, {count: props.count, msg: ''})
  return (
    <React.Fragment>
      <div>{state.count}</div>
      <div>{state.msg}</div>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    </React.Fragment>
  )
}
