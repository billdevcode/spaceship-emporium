import { browserHistory } from 'react-router'

export const redirectToSpaceships = (store) => {
  if (store.getState().location.pathname === '/') {
    return browserHistory.push('/spaceships')
  } else {
    return null
  }
}
