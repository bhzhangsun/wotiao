import controller from './controller'
import context from './context'
class App {
  constructor() {
    this.controller = controller
    this.controller.initView()
    // setTimeout(() => {
    //   console.log('context:', context);
    // }, 10000)
  }
  static _instance = new App()

  loop() {
    const {renderer, scene, camera} = context
    // console.log('loop');
    renderer.render(scene, camera);
    requestAnimationFrame(() => this.loop());
  }
}


export default App._instance