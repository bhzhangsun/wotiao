import GameController from './game/controller'

/**
 * 游戏主函数
 */
function main() {
  const controller = new GameController()
  controller.initGame()
}

export default main;