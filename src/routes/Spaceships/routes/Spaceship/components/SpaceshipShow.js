import React from 'react'
import propTypes from 'prop-types'
import Image from '../../../components/Image'
import './SpaceshipShow.scss'

const SpaceshipShow = ({ spaceship }) => {
  const { name, price, classType, manufacturer } = spaceship
  return (
    <div className='SpaceshipShow col-8'>
      <div className='SpaceshipShow__Image'>
        <Image name={name} />
      </div>
      <h1 className='SpaceshipShow__Title'>{name}</h1>
      <h3 className='SpaceshipShow__Price'>{price}</h3>
      <p className='SpaceshipShow__Class'>{classType}</p>
      <p className='SpaceshipShow__Manufacturer'>{manufacturer}</p>
    </div>
  )
}

SpaceshipShow.propTypes = {
  spaceship: propTypes.object
}

export default SpaceshipShow
