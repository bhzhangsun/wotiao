import * as THREE from '../../lib/three'
import Convex from './convex'
export default class Cylinder extends Convex {
  constructor(x, y, z) {
    const raidus = 10
    const height = 10
    const radial = 120
    const geometry = new THREE.CylinderGeometry(raidus, raidus, height, radial)
    const material = new THREE.MeshBasicMaterial({color: 0xffffff})
    const object = new THREE.Mesh(geometry, material)

    super(geometry, material, object, x, y, z)
    this.raidus = raidus
    this.height = height
    this.radial = radial
  }
}