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
// set default strings
const Pet = ({
  name,
  animal = 'Not provided',
  breed = 'None provided',
  media,
  location,
  id,
  key
}) => {
  // if there's a photo, us it; otherwise use a corgi pic
  const hero = media.length ? media[0].small : 'http://fillmurray.com/300/300'

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  )
}

export default Pet
