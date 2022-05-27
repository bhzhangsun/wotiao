import * as THREE from '../../lib/three'
import Convex from './convex'
export default class Cuboid extends Convex {
  constructor(x, y, z) {
    const width =  10
    const height = 10
    const depth = 10
    const geometry = new THREE.BoxGeometry(width, height, depth)
    const material = new THREE.MeshBasicMaterial({color: 0xffffff})
    const object = new THREE.Mesh(geometry, material)

    super(geometry, material, object, x, y, z)
    this.width = width
    this.height = height
    this.depth = depth
  }
}