const pathToRegExp = require('path-to-regexp')

class Route {
  uri = '';

  methods = [];

  controllerAction = null;

  keys = [];

  regexp = null;

  controllerCallback = null;

  middlewares = [];

  constructor(uri, methods = []) {
    this.uri = uri
    this.methods = methods.map(method => method.toUpperCase())
    this.regexp = pathToRegExp(uri, this.keys)

    if (this.methods.includes('GET') && !this.methods.includes('HEAD')) {
      this.methods.push('HEAD')
    }
  }

  getParams(path) {
    return path.match(this.regexp).slice(1)
  }

  getController(...args) {
    return this.controllerCallback(...args)
  }

  setControllerCallback(controllerCallback) {
    this.controllerCallback = controllerCallback
    return this
  }

  setControllerAction(controllerAction) {
    this.controllerAction = controllerAction
    return this
  }

  setMiddlewares(middlewares) {
    this.middlewares = middlewares
    return this
  }

  match(path) {
    return this.regexp.test(path)
  }
}

module.exports = Route