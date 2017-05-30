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
    <div className='SpaceshipSidebar col-md-4 col-sm-12'>
      <header>
        <h3>Tech Specs</h3>
      </header>
      <section>
        <p>Length: {length || '*Unavailable'}</p>
        <p>Max Acceleration: {maxaccel || '*Unavailable'}</p>
        <p>MGLT: {MGLT || '*Unavailable'}</p>
        <p>Maxatmosphericspeed: {maxatmosphericspeed || '*Unavailable'}</p>
        <p>Hull: {hull || '*Unavailable'}</p>
        <p>Sensor: {sensor || '*Unavailable'}</p>
        <p>Targeting: {targeting || '*Unavailable'}</p>
        <p>Armament: {armament || '*Unavailable'}</p>
        <p>Communications: {communications || '*Unavailable'}</p>
      </section>
      <button className='SpaceshipSidebar__BuyButton btn btn-success btn-lg'>Buy</button>
    </div>
  )
}
SpaceshipSidebar.propTypes = {
  spaceshipTechSpecs: propTypes.object
}

export default SpaceshipSidebar
