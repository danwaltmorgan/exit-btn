import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App(props) {

  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(props.active)
    if (active) {
      const crosses = document.querySelectorAll(".cross")
      crosses.forEach(cross => {
        cross.style.width = "100%"
      })
      setTimeout(() => {
        const left = document.querySelector("#left")
        const right = document.querySelector("#right")
        left.classList.add("active-left")
        right.classList.add("active-right")
      }, 400)
    }
  })


  return (
    <div id="test">
      <div className="container">
        <div
          className="cross "
          id="left"></div>
          <div
            className="cross "
            id="right"></div>
          </div>
    </div>
  )
}

function Test() {

  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(true)
  }
  return (
    <div>
      <App active={state} />
      <button onClick={handleClick}>test</button>
    </div>
  )
}

ReactDOM.render(
  <Test />,
  document.getElementById("root")
)
