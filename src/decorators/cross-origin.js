/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
function decoratorClass(target, options) {
  Reflect.defineMetadata('controllerCrossOrigin', {
    ...options,
  }, target.prototype);
  return target;
}

function decoratorMethod(target, name, descriptor, options) {
  const corses = Reflect.getMetadata('routeCrossOrigin', target) ?? {};
  corses[name] = {
    ...options,
  };
  Reflect.defineMetadata('routeCrossOrigin', corses, target);
  return target;
}

function handle(args, options) {
  if (args.length === 1) {
    return decoratorClass(...args, options);
  }
  return decoratorMethod(...args, options);
}

module.exports = function CrossOrigin(options = {}) {
  return (...args) => handle(args, options);
};
