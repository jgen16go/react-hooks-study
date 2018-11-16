import React from 'react'

import { CompA } from './compA'
import { CompB } from './compB'

export const App = props => {
  return (
    <React.Fragment>
      <CompA count={0} />
      <CompB count={0} />
    </React.Fragment>
  )
}
