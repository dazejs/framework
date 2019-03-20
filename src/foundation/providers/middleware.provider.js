const path = require('path')
const injectorFactory = require('../injector/factory')
const Pipeline = require('../../pipeline')

class MiddlewareProvider {
  /**
  * @var {object} app Application
  */
  app = null;

  /**
   * create Middleware Provider
   * @param {object} app Application
   */
  constructor(app) {
    this.app = app
  }

  register() {
    this.app.bind('context', Pipeline)
  }

  launch() {
    const config = this.app.get('config')
    const middlewares = config.get('middleware', [])
    const context = this.app.get('context')
    for (const mid of middlewares) {
      // 用户中间件目录存在中间件
      const userMiddlewarePath = path.join(this.app.middlewarePath, mid)
      // 确认模块可加载
      if (require.resolve(userMiddlewarePath)) {
        const currentMiddleware = require(userMiddlewarePath)
        context.pipe(ctx => {
          const injectedMiddleware = injectorFactory(currentMiddleware, ctx)
          return injectedMiddleware.handle(ctx)
        })
      }
    }
  }
}

module.exports = MiddlewareProvider