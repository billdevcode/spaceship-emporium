import { createAction, handleActions } from 'redux-actions'

export const selectSpaceshipsData = state => state.spaceships.spaceshipsData

export const INITIAL_DATA = 'INITIAL_DATA'

export const initialData = createAction(INITIAL_DATA)

const spaceshipsDataReducer = handleActions({
  [INITIAL_DATA]: (state, action) => {
    const { payload } = action
    return {
      ...state,
      spaceshipsData: payload.products
    }
  }
}, { spaceshipsData: [] })

export default spaceshipsDataReducer
