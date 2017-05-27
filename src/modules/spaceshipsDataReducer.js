import { createAction, handleActions } from 'redux-actions'

export const selectSpaceshipsData = state => state.spaceshipsData.spaceships

export const INITIAL_DATA = 'INITIAL_DATA'

export const initialData = createAction(INITIAL_DATA)

const spaceshipsDataReducer = handleActions({
  [INITIAL_DATA]: (state, action) => {
    const { payload } = action
    return {
      ...state,
      spaceships: payload.products
    }
  }
}, { spaceships: [] })

export default spaceshipsDataReducer
