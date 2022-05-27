class Event {
  constructor(sender) {
    this._sender = sender || this
    this._subscribers = []
  }

  notify(...args) {
    for (const handler of this._subscribers) {
      handler(this._sender, ...args)
    }
  }

  attach(handler) {
    this._subscribers.push(handler)
  }

  unsubscribe(handler) {
    const idx = this._subscribers.indexOf(handler)
    if (idx != -1) {
      this._subscribers.splice(idx, 1)
    }
  }
}

export default Event