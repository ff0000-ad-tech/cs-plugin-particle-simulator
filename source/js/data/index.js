import actions from './actions'
import emitterPhysics from './emitterPhysics'
import getStyleAnimationData from './styleAnimation'
import { getDefaultNewParticleModelData, particleModel } from './particleModel'

const InterfaceData = {
  actions,
  emitterPhysics,
  styleAnimation: getStyleAnimationData(),
  particleModel,
  getDefaultNewParticleModelData
}

export default InterfaceData