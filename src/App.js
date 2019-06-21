import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet'
import SearchParam from './SearchParam'
import {Router, Link} from '@reach/router'
import Details from './Details'

// create App component using JSX
const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParam path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
}

// render the App component to the DOM
render(React.createElement(App), document.getElementById('root'))
