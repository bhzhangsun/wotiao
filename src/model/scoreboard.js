import Event from '../utils/event'

class ScoreBoard extends Event {
  constructor() {
    super()
    this._score = 0
  }

  addScore(score) {
    this._score += score
    this.notify(this._score)
  }
  clearScore() {
    this._score = 0
    this.notify(this._score)
  }
}

export default ScoreBoard