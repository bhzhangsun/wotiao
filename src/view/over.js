import { TetrahedronGeometry } from '../../libs/three'
import View from '../utils/view'
class OverView extends View {
  constructor() {
    super()
    const aspect = window.innerHeight / window.innerWidth
    this._canvas = document.createElement('canvas')
    this._canvas.width = window.innerWidth
    this._canvas.height = window.innerHeight
    this._texture = new THREE.Texture(this._canvas)
    this._material = new THREE.MeshBasicMaterial({
      map: this._texture, 
      transparent: true
    })
    this._geometry = new THREE.PlaneGeometry()
    
  }

  show() {
    
  }
}

export default OverView