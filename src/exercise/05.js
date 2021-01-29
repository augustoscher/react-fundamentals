// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const Box = ({ size, style, children }) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{ fontStyle: 'italic', ...style }}>
        {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Box size="small" style={{ background: 'lightblue' }}>
        <span>small lightblue box</span>
      </Box>
      <Box size="medium" style={{ background: 'pink' }}>
        <span>small lightblue box</span>
      </Box>
      <Box size="large" style={{ background: 'orange' }}>
        <span>small lightblue box</span>
      </Box>
      <Box>
        <span>sizeless box</span>
      </Box>
    </div>
  )
}

export default App
