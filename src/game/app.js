import GameController from './controller'
class App {
  constructor() {
    this.controller = new GameController()
  }
  static _instance = new App()

  init() {
    this.controller.initPages()
  }
}


export default App._instance