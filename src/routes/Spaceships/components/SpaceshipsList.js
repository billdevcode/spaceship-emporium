import React from 'react'
import propTypes from 'prop-types'
import Spaceship from './Spaceship'
import './SpaceshipsList.scss'

const SpaceshipsList = ({ spaceshipsList }) => {
  return (
    <div>
      <header className='SpaceshipsList__Header'>
        <h1>Watto’s Spaceship Emporium</h1>
      </header>
      <div className='SpaceshipsList container'>
        <div className='row'>
          {spaceshipsList.map(({ name, price }, index) => {
            return (
              <Spaceship
                key={index}
                routeIndex={index}
                name={name}
                price={price}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

SpaceshipsList.propTypes = {
  spaceshipsList: propTypes.array
}

export default SpaceshipsList
