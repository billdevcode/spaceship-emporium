import React from 'react'
import './SpaceshipView.scss'
import SpaceshipMain from '../containers/SpaceshipMainContainer'
import SpaceshipSidebar from '../containers/SpaceshipSidebarContainer'

const SpaceshipView = () => {
  return (
    <div className='SpaceshipView container'>
      <div className='row'>
        <SpaceshipMain />
        <SpaceshipSidebar />
      </div>
    </div>
  )
}

export default SpaceshipView
