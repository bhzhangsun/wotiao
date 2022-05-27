import GamePage from '../page/game'
import OverPage from '../page/over'

class GameView {
  constructor() {
    
  }

  init(ctx) {
    this.game = new GamePage(ctx)
    this.game.init()
    this.over = new OverPage(ctx)
    this.over.init()
  }

  showGameView() {
    console.log('showGameView');
  }

  showOverView() {
    console.log('showOverView');
  }

  showReadyView() {

  }

  static _instance = new GameView()

}

export default GameView._instance