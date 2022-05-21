/**
 * Event实例提供一个事件发布订阅的模型
 * controller 作为事件分发总线
 */

class Event {
  constructor() {
    this._handlers = []
  }

  attach(handler) {
    if (typeof handler !== 'function') {
      return console.error('Event:attach 参数必须为函数类型')
    }

    this._handlers.push(handler)
  }

  notify(args) {
    for (let handler of this._handlers) {
      handler(args);
    }
  }
}
export default Event
// Event 事件对象 1《------------》* 观察者
