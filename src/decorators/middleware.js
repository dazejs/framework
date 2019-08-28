/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
const proxy = require('../base/proxy');
const BaseMiddleware = require('../base/middleware');

function decoratorClass(target, name) {
  Reflect.setMetadata('type', 'middleware', target.prototype);
  Reflect.setMetadata('name', name, target.prototype);
  return proxy(target, BaseMiddleware);
}

function handle(args, name) {
  if (args.length === 1) {
    return decoratorClass(...args, name);
  }
  throw new TypeError('@Middleware must be decorate on Class');
}

module.exports = function Middleware(name) {
  return (...args) => handle(args, name);
};
