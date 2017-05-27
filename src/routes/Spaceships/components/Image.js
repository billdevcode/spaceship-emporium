import React from 'react'
import propTypes from 'prop-types'

import AlphaClassXg1StarWing from 'assets/Alpha-class-Xg-1-Star-Wing.jpg'
import BWingHeavyAssaultStarfighter from 'assets/B-wing-heavy-assault-starfighter.jpg'
import LambdaClassT4AShuttle from 'assets/Lambda-class-T-4a-shuttle.jpg'
import RZ1AWingInterceptor from 'assets/RZ-1-A-wing-interceptor.jpg'
import T65XWingStarfighter from 'assets/T-65-X-wing-Starfighter.png'
import TwinIonEngineStarfighter from 'assets/Twin-Ion-Engine-Starfighter.png'
import YWingStarfighter from 'assets/Y-wing-Starfighter.jpg'
import YT1300LightFreighter from 'assets/YT-1300-Light-Freighter.jpg'

const findImage = (name) => {
  const spaceshipsImageList = {
    'Twin Ion Engine Starfighter': TwinIonEngineStarfighter,
    'T-65 X-wing Starfighter': T65XWingStarfighter,
    'Y-wing Starfighter': YWingStarfighter,
    'YT-1300 Light Freighter': YT1300LightFreighter,
    'Alpha-class Xg-1 Star Wing': AlphaClassXg1StarWing,
    'Lambda-class T-4a shuttle': LambdaClassT4AShuttle,
    'RZ-1 A-wing interceptor': RZ1AWingInterceptor,
    'B-wing heavy assault starfighter': BWingHeavyAssaultStarfighter
  }
  return spaceshipsImageList[name]
}

const Image = ({ name }) => {
  const image = findImage(name)
  return (
    <div>
      <img className='Spaceship__Image' src={image} />
    </div>
  )
}

Image.propTypes = {
  name: propTypes.string
}

export default Image
