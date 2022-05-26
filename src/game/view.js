import GamePage from '../page/game'
import OverPage from '../page/over'
class GameView {
  constructor() {
  }

  static _instance = new GameView()

  initSencePage() {
    this.game = new GamePage()
    this.game.init()
  }

  initOverPage() {
    this.over = new OverPage()
    this.over.init()
  }

}

export default GameView._instance