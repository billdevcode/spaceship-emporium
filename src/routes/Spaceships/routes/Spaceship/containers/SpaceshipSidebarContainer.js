import { connect } from 'react-redux'
import SpaceshipSidebar from '../components/SpaceshipSidebar'
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

export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipSidebar)
