import * as THREE from '../../lib/three'
import config from '../../game.config'
class GameContext {
  constructor() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    const aspect = this.height / this.width
    this.l = -(config.sence.frustumSize)
    this.r = config.sence.frustumSize
    this.t = config.sence.frustumSize * aspect
    this.b = -(config.sence.frustumSize * aspect)

    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antilias: true,
      preserveDrawingBuffer: true
    });
    this.camera = new THREE.OrthographicCamera(
      this.l,
      this.r,
      this.t,
      this.b,
      -100,
      85
    );

    const axesHelper = new THREE.AxesHelper(100);
    this.scene.add( axesHelper );

    this.camera.position.set(-10, 10, 10)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
  static _instance = new GameContext()
}

export default GameContext._instance