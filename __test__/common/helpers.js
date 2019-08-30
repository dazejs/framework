
require('../../src/helpers');
const Controller = require('../../src/base/controller');

exports.createController = function () {
  class _Controller extends Controller {
    get hello() {
      return 'hello';
    }

    index() { }

    show() { }

    create() { }

    stroe() { }

    edit() { }

    update() { }

    destory() { }
  }

  Reflect.setMetadata('type', 'controller', _Controller.prototype);

  return _Controller;
};

exports.createService = function () {
  const target = class {};
  Reflect.setMetadata('type', 'service', target.prototype);
  Reflect.setMetadata('name', 'user', target.prototype);
  return target;
};

exports.createResource = function () {
  const target = class { };
  Reflect.setMetadata('type', 'resource', target.prototype);
  Reflect.setMetadata('name', 'user', target.prototype);
  return target;
};

exports.createComponent = function () {
  const target = class { };
  Reflect.setMetadata('type', 'component', target.prototype);
  Reflect.setMetadata('name', 'user', target.prototype);
  return target;
};
