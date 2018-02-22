import getActions from './getActions'
import emitterPhysics from './emitterPhysics'
import getStyleAnimationData from './styleAnimation'
import { getDefaultNewParticleModelData, getParticleModelAction } from './particleModel'

// const InterfaceData = {
//   actions,
//   emitterPhysics,
//   styleAnimation: getStyleAnimationData(),
//   particleModel,
//   getDefaultNewParticleModelData
// }

const getInterfaceData = function (Interface) {
  return {
    actions: getActions(Interface),
    emitterPhysics,
    styleAnimation: getStyleAnimationData(Interface),
    particleModel: getParticleModelAction(Interface),
    getDefaultNewParticleModelData: getDefaultNewParticleModelData(Interface)
  }
  
}

export default getInterfaceData