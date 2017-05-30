import React from 'react'
import propTypes from 'prop-types'
import Spaceship from './Spaceship'
import './SpaceshipsList.scss'

const SpaceshipsList = ({ spaceshipsList }) => {
  return (
    <div className='SpaceshipsList'>
      <div className='SpaceshipsList__Hero'>
        <video className='SpaceshipsList__Hero-video' preload='auto' loop autoPlay>
          <source src='https://d1a3f4spazzrp4.cloudfront.net/clarity/bit_grip_bg.mp4' type='video/mp4' />
        </video>
        <header className='SpaceshipsList__Header'>
          <h1 className='SpaceshipsList__Header-title'>Watto’s Spaceship Emporium</h1>
        </header>
      </div>
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
