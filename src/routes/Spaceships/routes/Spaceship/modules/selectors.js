export const selectSpaceshipsData = state => state.spaceships.spaceshipsData
export const selectSpaceship = state => id => selectSpaceshipsData(state)[id - 1]
export const selectSpaceshipTechSpecs = state => id => selectSpaceship(state)(id).techspecs
