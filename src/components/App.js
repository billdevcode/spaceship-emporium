import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { initialData } from '../modules/spaceshipsDataReducer'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  fetchData () {
    const { store } = this.props

    fetch('http://demo7475333.mockable.io/spaceships')
    .then(function (response) {
      return response.json()
    }).then(function (json) {
      store.dispatch(initialData(json))
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }

  componentWillMount () {
    this.fetchData()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

export default App
