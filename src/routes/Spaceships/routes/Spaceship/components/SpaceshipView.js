import React from 'react'
import './SpaceshipView.scss'
import SpaceshipMain from '../containers/SpaceshipMainContainer'
import SpaceshipTechSpec from '../containers/SpaceshipTechSpecContainer'

const SpaceshipView = () => {
  return (
    <div className='SpaceshipView container'>
      <div className='row'>
        <SpaceshipMain />
        <SpaceshipTechSpec />
      </div>
    </div>
  )
}

export default SpaceshipView
