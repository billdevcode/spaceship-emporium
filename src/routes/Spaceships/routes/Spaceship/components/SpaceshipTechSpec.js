import React from 'react'
import propTypes from 'prop-types'
import './SpaceshipTechSpec.scss'

const SpaceshipTechSpec = ({ spaceshipPrice, spaceshipTechSpecs }) => {
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
    <div className='SpaceshipTechSpec col-md-4 col-sm-12'>
      <header>
        <h3>Tech Specs</h3>
      </header>
      <section className='SpaceshipTechSpec__Specs'>
        {length && <p>Length: {length}</p>}
        {maxaccel && <p>Max Acceleration: {maxaccel}</p>}
        {MGLT && <p>MGLT: {MGLT}</p>}
        {maxatmosphericspeed && <p>Maxatmosphericspeed: {maxatmosphericspeed}</p>}
        {hull && <p>Hull: {hull}</p>}
        {sensor && <p>Sensor: {sensor}</p>}
        {targeting && <p>Targeting: {targeting}</p>}
        {armament && <p>Armament: {armament}</p>}
        {communications && <p>Communications: {communications}</p>}
      </section>
      {spaceshipPrice && <button className='SpaceshipTechSpec__BuyButton btn btn-success btn-lg'>Buy</button>}
    </div>
  )
}
SpaceshipTechSpec.propTypes = {
  spaceshipPrice: propTypes.string,
  spaceshipTechSpecs: propTypes.object
}

export default SpaceshipTechSpec
