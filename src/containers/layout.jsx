import React from 'react'
import "./styles.css"
import Navigation from "../components/navigation"
const Layout = ({children}) => {
  return (
    <div className="container">
      <Navigation/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
