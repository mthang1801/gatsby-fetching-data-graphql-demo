import React from 'react'
import {Link} from "gatsby"
const navigation = () => {
  return (
    <nav>
      <Link to="/" className="p2">Home</Link>
      <Link to="/continents" className="p2">Continents</Link>
      <Link to="/countries" className="p2">Countries</Link>
    </nav>
  )
}

export default navigation
