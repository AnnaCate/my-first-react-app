import React from 'react'

// create Pet component
const Pet = ({name, animal, breed}) => {
  // destructuring "props"
  return React.createElement('div', {}, [
    // create array of elements
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

export default Pet
