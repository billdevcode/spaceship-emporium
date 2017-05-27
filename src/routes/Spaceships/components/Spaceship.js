import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router'
import Image from './Image'
import './Spaceship.scss'

const Spaceship = ({ name, routeIndex }) => {
  return (
    <div className='Spaceship col-md-6 col-sm-12'>
      <Link className='Spaceship__Link' to={`/spaceships/${routeIndex + 1}`}>
        <Image name={name} />
        <h3 className='Spaceship__Title'>{name}</h3>
      </Link>
    </div>
  )
}

Spaceship.propTypes = {
  name: propTypes.string,
  routeIndex: propTypes.number
}

export default Spaceship
