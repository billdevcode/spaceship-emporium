import React from 'react'
import './SpaceshipView.scss'
import SpaceshipShow from '../containers/SpaceshipShowContainer'
import SpaceshipSidebar from '../containers/SpaceshipSidebarContainer'

const SpaceshipView = () => {
  return (
    <div className='SpaceshipView'>
      <SpaceshipShow />
      <SpaceshipSidebar />
    </div>
  )
}

export default SpaceshipView
