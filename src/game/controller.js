import model from './model'
import view from './view'
class GameController {
  constructor() {
    this.model = model
    this.view = view
  }

  initPages() {
    // view 初始化
    this.view.initSencePage()
    this.view.initOverPage()
  }
}
export default GameController