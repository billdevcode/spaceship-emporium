import React from 'react'
import propTypes from 'prop-types'
import './SpaceshipSidebar.scss'

const SpaceshipSidebar = ({ spaceshipTechSpecs }) => {
  const {
    length,
    maxaccel,
    MGLT,
    maxatmosphericspeed,
    hull,
    sensor,
    targeting,
    armament,
    communications
  } = spaceshipTechSpecs
  return (
    <div className='SpaceshipSidebar col-4'>
      <header>
        <h2>Tech Specs</h2>
      </header>
      <section>
        <p>Length: {length}</p>
        <p>Max Acceleration: {maxaccel}</p>
        <p>MGLT: {MGLT}</p>
        <p>Maxatmosphericspeed: {maxatmosphericspeed}</p>
        <p>Hull: {hull}</p>
        <p>Sensor: {sensor}</p>
        <p>Targeting: {targeting}</p>
        <p>Armament: {armament}</p>
        <p>Communications: {communications}</p>
      </section>
    </div>
  )
}
SpaceshipSidebar.propTypes = {
  spaceshipTechSpecs: propTypes.object
}

export default SpaceshipSidebar
