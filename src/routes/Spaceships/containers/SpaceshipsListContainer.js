import { connect } from 'react-redux'
import SpaceshipsList from '../components/SpaceshipsList'
import { selectSpaceshipsData } from 'modules/spaceshipsDataReducer'

const mapStateToProps = (state, ownProps) => {
  const spaceshipsList = selectSpaceshipsData(state)
  return {
    spaceshipsList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipsList)
