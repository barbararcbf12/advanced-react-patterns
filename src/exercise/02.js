// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    if (typeof child.type === 'string') {
      return child
    }

    const newChild = React.cloneElement(child, {on, toggle})
    return newChild

    //OR
    // if (allowedTypes.includes(child.type){
    //   const newChild = React.cloneElement(child, {on, toggle})
    // return newChild
    // }
    // return child
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (!on ? children : null)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

//I can also define types for the compaund component
const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

// So that, if someone creates a new component an adds it inside of the compound component, it won't change state
function MyToggleButton({on, toggle}) {
  return on ? 'the button is on' : 'the button is off'
}

function App() {
  return (
    <div>
      <Toggle>
        <span>Hello! </span>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
        <MyToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
