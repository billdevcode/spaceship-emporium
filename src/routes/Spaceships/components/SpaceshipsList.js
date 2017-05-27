import React from 'react'
import propTypes from 'prop-types'
import Spaceship from './Spaceship'

const SpaceshipsList = ({ spaceshipsList }) => {
  return (
    <div className='container'>
      <div className='row'>
        {spaceshipsList.map(({ name }, index) => {
          return (
            <Spaceship key={index} routeIndex={index} name={name} />
          )
        })}
      </div>
    </div>
  )
}

SpaceshipsList.propTypes = {
  spaceshipsList: propTypes.array
}

export default SpaceshipsList
