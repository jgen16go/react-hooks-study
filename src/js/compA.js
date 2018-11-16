import React, { useState } from 'react'

// export const CompA = props => {
//   // const [count, setCount] = useState(props.count)

//   // 初期状態を返す関数でもOK
//   const [count, setCount] = useState(() => {
//     const initialCount = props.count
//     return initialCount + 10
//   })
//   return (
//     <React.Fragment>
//       <div>{count}</div>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>increment</button>
//       <button onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
//     </React.Fragment>
//   )
// }


export const CompA = props => {
  const [state, setCount] = useState({
    count: 0,
    msg: '',
  })
  return (
    <React.Fragment>
      <div>{state.count}</div>
      <div>{state.msg}</div>
      <button onClick={() => setCount(state => {
        return {
          count: state.count + 1,
          msg: 'increment',
        }
      })}>increment</button>
      <button onClick={() => setCount(state => {
        return {
          count: state.count - 1,
          msg: 'decrement',
        }
      })}>decrement</button>
    </React.Fragment>
  )
}
