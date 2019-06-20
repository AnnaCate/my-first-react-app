import React from 'react'

// create Pet component
// const Pet = ({name, animal, breed}) => {
//   // destructuring "props"
//   return React.createElement('div', {}, [
//     // create array of elements
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ])
// }

// create Pet component using JSX
const Pet = ({
  name = 'Not provided',
  animal = 'Not provided',
  breed = 'None provided'
}) => {
  return (
    <div className={'pet'}>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed(s): {breed}</h2>
    </div>
  )
}

export default Pet
