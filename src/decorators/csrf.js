/**
 * Copyright (c) 2018 Chan Zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const useMiddleware = require('./use-middleware');

module.exports = function Csrf() {
  return elementDescriptor => useMiddleware('verify-csrf-token')(elementDescriptor);
};
