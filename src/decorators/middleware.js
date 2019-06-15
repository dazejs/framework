

/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

function injectClass(elementDescriptor, name) {
  return {
    ...elementDescriptor,
    finisher(target) {
      Reflect.setMetadata('type', 'middleware', target.prototype);
      Reflect.setMetadata('middleware', name, target.prototype);
      return target;
    },
  };
}

function handle(elementDescriptor, name) {
  const { kind } = elementDescriptor;
  if (kind === 'class') {
    return injectClass(elementDescriptor, name);
  }
  throw new TypeError('@Middleware must use on class');
}

module.exports = function Middleware(name) {
  return elementDescriptor => handle(elementDescriptor, name);
};
