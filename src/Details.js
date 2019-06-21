import React, {useState, useEffect} from 'react'
import pet from '@frontendmasters/pet'

const Details = ({id}) => {
  const [selectedPet, setSelectedPet] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccessful, setIsSuccessful] = useState({success: false, err: null})

  async function getPet(petId) {
    pet
      .animal(petId)
      .then(animal => {
        setSelectedPet(animal)
        setIsLoading(false)
        setIsSuccessful({success: true})
      })
      .catch(err => {
        setSelectedPet({})
        setIsLoading(false)
        setIsSuccessful({success: false, err})
      })
  }

  useEffect(() => {
    getPet(id)
  }, []) // empty array makes it do it just once

  let DisplayTheStuff = null

  if (isLoading === false && isSuccessful.success === true) {
    DisplayTheStuff = (
      <div className="details">
        {/* <pre>
          <code>{JSON.stringify(selectedPet, null, 4)}</code>
        </pre> */}
        <div className="carousel">
          {selectedPet.animal.photos.map((photo, index) => (
            <img key={index} src={photo.medium} alt="Pet"></img>
          ))}
          {/* <img src={selectedPet.animal.photos[0].large} alt="Pet"></img> */}
        </div>
        <h1>{selectedPet.animal.name}</h1>
        <h2>{selectedPet.animal.breeds.primary}</h2>
        <h2>
          {selectedPet.animal.age} {selectedPet.animal.gender}
        </h2>
        <p>{selectedPet.animal.description}</p>
      </div>
    )
  } else if (isLoading === true) {
    DisplayTheStuff = (
      <div>
        <h1>Please wait...</h1>
      </div>
    )
  } else {
    DisplayTheStuff = <div>Whoops, something went wrong</div>
  }

  return DisplayTheStuff
}

export default Details
