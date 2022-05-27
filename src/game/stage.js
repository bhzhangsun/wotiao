import Event from '../utils/event'
class GameStage extends Event {
  constructor() {
    super()
    this._stage = 'ready'
  }

  setStage(state) {
    this._stage = state
    this.notify(this._stage)
  }

  getStage() {
    return this._stage
  }
  static _instance = new GameStage()
}



export default GameStage._instance