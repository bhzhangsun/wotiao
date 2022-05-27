import stage from './stage'
import view from './view'
import context from './context'
class GameController {
  constructor() {
    this.stage = stage
    this.view = view
  }

  initView() {
    // view 初始化
    this.view.init(context)

    // view switch handler register
    this.stage.attach((_sender, stag) => {
      if (stag == 'over') {
        this.view.showOverView()
      } else if (stag == 'game') {
        this.view.showGameView()
      }
    })
    
    setTimeout(() => {
      this.stage.setStage('game')
    }, 5000)
  }

  static _instance = new GameController()
}
export default GameController._instance