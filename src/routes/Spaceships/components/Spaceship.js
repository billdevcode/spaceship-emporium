import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router'
import Image from './Image'
import './Spaceship.scss'

const Spaceship = ({ name, price, routeIndex }) => {
  return (
    <div className='Spaceship col-md-6 col-sm-12'>
      <Link className='Spaceship__Link' to={`/spaceships/${routeIndex + 1}`}>
        <Image name={name} />
        <h3 className='Spaceship__Title'>{name}</h3>
      </Link>
      { price
        ? <h3 className='Spaceship__Price'>${price}</h3>
        : <h3 className='Spaceship__Price--sold-out'>Sold Out</h3>
      }
    </div>
  )
}

Spaceship.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  routeIndex: propTypes.number
}

export default Spaceship
