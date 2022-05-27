export default class Convex {
  constructor(geometry, material, object, x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    
    this.geometry = geometry
    this.material = material
    this.object = object
    this.object.position.x = x
    this.object.position.y = y
    this.object.position.z = z
  }




}