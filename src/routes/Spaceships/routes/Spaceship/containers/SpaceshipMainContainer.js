import { connect } from 'react-redux'
import SpaceshipMain from '../components/SpaceshipMain'
import { getSpaceshipId } from '../modules/helper'
import { selectSpaceship } from '../modules/selectors'

const mapStateToProps = (state, ownProps) => {
  const spaceshipId = getSpaceshipId(state)
  const spaceshipData = selectSpaceship(state)(spaceshipId)
  const spaceship = {
    name: spaceshipData.name,
    price: spaceshipData.price,
    classType: spaceshipData.class,
    manufacturer: spaceshipData.manufacturer
  }
  return {
    spaceship
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipMain)
