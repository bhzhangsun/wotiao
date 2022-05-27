import * as THREE from '../../lib/three'
class Over {
  constructor(ctx) {
    this._ctx = ctx
    this.canvas = document.createElement('canvas')
    console.log('this.canvas:', this.canvas)
    this.canvas.height = ctx.height
    this.canvas.width = ctx.width
    this.texture = new THREE.Texture(this.canvas)
    this.texture.minFilter = THREE.LinearFilter
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    })
    this.geometry = new THREE.PlaneGeometry(ctx.width, ctx.height)
    this.object = new THREE.Mesh(this.geometry, this.material)
    this.object.position.x = 0
    this.object.position.y = 0
    this.object.position.z = 1
  }

  init() {
    console.log('over page init complete!')
    this.render()
  }

  render() {
    const {width, height, scene} = this._ctx
    // console.log('over render:', width, height, scene);
    const canvas = this.canvas
    const context = canvas.getContext('2d')
    context.fillStyle = '#333'
    context.fillRect((width - 200) / 2, (height - 100) / 2, 200, 100)
    context.fillStyle = '#eee'
    context.font = '20px Georgia'
    context.fillText('Game Over', (width - 200) / 2 + 50, (height - 100) / 2 + 55)
    this.texture.needsUpdate = true
    this.object.visible = false
    scene.add(this.object)
    console.log('over page rendered!')
  }

  show() {
    this.object.visible = true
  }

  hide() {
    this.object.visible = false
  }
}

export default Over