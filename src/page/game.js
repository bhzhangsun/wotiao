import Cuboid from '../object/cuboid'
import Cylinder from '../object/cylinder'
class Game {
  constructor(ctx) {
    this._ctx = ctx
  }

  init() {
    console.log('game page init complete!')
    this.render()
  }

  render() {
    const {renderer, scene, camera, width, height, } = this._ctx
    
    console.log('game render:', scene)
    const cuboid = new Cuboid(-15, 0, 0)
    const cylinder = new Cylinder(23, 0, 0)

    scene.add(cuboid.object)
    scene.add(cylinder.object)
    

    // var currentAngle = 0;
    // var lastTimestamp = Date.now();
  }
  show() {

  }
}

export default Game