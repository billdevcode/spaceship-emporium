import React from 'react'
import propTypes from 'prop-types'
import Image from '../../../components/Image'
import './SpaceshipMain.scss'

const SpaceshipMain = ({ spaceship }) => {
  const { name, price, classType, manufacturer } = spaceship
  return (
    <div className='SpaceshipMain col-md-8 col-sm-12'>
      <div className='SpaceshipMain__Image'>
        <Image name={name} />
      </div>
      <h1 className='SpaceshipMain__Title'>{name || 'N/A'}</h1>
      {price
        ? <h3 className='SpaceshipMain__Price'>${price}</h3>
        : <h3 className='SpaceshipMain__Price--sold-out'>Sold Out</h3>
      }
      <p className='SpaceshipMain__Class'>Class: {classType || 'N/A'}</p>
      <p className='SpaceshipMain__Manufacturer'>Manufacturer: {manufacturer || 'N/A'}</p>
    </div>
  )
}

SpaceshipMain.propTypes = {
  spaceship: propTypes.object
}

export default SpaceshipMain
