import Event from '../utils/event'

class Stage extends Event {
  constructor() {
    super()
    this._stage = 'home'
    this.notify(this._stage)
  }

  set(name) {
    const from  = this._stage
    this._stage = name
    this.notify({from, to: name})
  }

  get() {
    return this._stage
  }
}

export default Stage