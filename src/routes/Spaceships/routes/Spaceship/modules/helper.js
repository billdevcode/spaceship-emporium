export const getSpaceshipId = (state) => {
  const spaceshipId = state.location.pathname.split('/')[2]
  return spaceshipId
}
