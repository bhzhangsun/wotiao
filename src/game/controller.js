import Stage from '../model/stage'
import ScoreBoard from '../model/scoreboard'
import HomeView from '../view/home'
import OverView from '../view/over'
import PlayView from '../view/play'


class GameController {
  constructor() {
    this._stage = new Stage()
    this._score = new ScoreBoard()
    this._views = {
      home: new HomeView(),
      play: new PlayView(),
      over: new OverView()
    }
  }
  initGame() {
    this._stage.attach((stage) => {
      const { from, to = 'home' } = stage
      this._views[from].hide()
      this._views[to].show()
    })

    this._score.attach((score) => {
      console.log('应该发生重绘')
      for (let v in this._views) {
        v.flush(score)
      }
    })
  }
}

export default GameController