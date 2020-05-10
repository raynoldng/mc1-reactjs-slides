import React from 'react'

const Content = ({children}) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{marginLeft: 70, marginRight: 70}}>{children}</div>
  </div>
)
export default Content