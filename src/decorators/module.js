/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
const { letModule } = require('../utils');

function injectClass(elementDescriptor) {
  return {
    ...elementDescriptor,
    finisher(target) {
      letModule(target.prototype);
      return target;
    },
  };
}

function handle(elementDescriptor) {
  if (elementDescriptor.kind === 'class') {
    return injectClass(elementDescriptor);
  }
  return elementDescriptor;
}

module.exports = function Module() {
  return elementDescriptor => handle(elementDescriptor);
};
