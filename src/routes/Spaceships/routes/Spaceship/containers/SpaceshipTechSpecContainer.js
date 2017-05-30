import { connect } from 'react-redux'
import SpaceshipTechSpec from '../components/SpaceshipTechSpec'
import { getSpaceshipId } from '../modules/helper'
import { selectSpaceshipTechSpecs } from '../modules/selectors'

const mapStateToProps = (state, ownProps) => {
  const spaceshipId = getSpaceshipId(state)
  const spaceshipTechSpecs = selectSpaceshipTechSpecs(state)(spaceshipId)
  return {
    spaceshipTechSpecs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipTechSpec)
