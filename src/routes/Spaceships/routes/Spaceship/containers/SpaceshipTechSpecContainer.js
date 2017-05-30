import { connect } from 'react-redux'
import SpaceshipTechSpec from '../components/SpaceshipTechSpec'
import { getSpaceshipId } from '../modules/helper'
import { selectSpaceship, selectSpaceshipTechSpecs } from '../modules/selectors'

const mapStateToProps = (state, ownProps) => {
  const spaceshipId = getSpaceshipId(state)
  const spaceship = selectSpaceship(state)(spaceshipId)
  const spaceshipPrice = spaceship.price
  const spaceshipTechSpecs = selectSpaceshipTechSpecs(state)(spaceshipId)
  return {
    spaceshipPrice,
    spaceshipTechSpecs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipTechSpec)
