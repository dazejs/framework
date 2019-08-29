/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const proxy = require('../base/proxy');
const BaseProvider = require('../base/provider');

function decoratorClass(target, name) {
  Reflect.setMetadata('type', 'provider', target.prototype);
  Reflect.setMetadata(name, name, target.prototype);
  return proxy(target, BaseProvider);
}

function handle(args, name) {
  if (args.length === 1) {
    return decoratorClass(...args, name);
  }
  throw new Error('@Provider must be decorate on Class');
}

module.exports = function Provider(name) {
  return (...args) => handle(args, name);
};