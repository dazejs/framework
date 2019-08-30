const path = require('path');
require('../../../src/helpers');
require('../../daze/src/app/controller/example');
require('../../daze/src/provider/app');
const { createController } = require('../../common/helpers');
const Controller = require('../../../src/controller');
const Application = require('../../../src/foundation/application');

const app = new Application(path.resolve(__dirname, '../../daze/src'));


describe('Controller', () => {
  it('Controller#register', async () => {
    await app.initialize();
    const _Controller = createController();
    const instance = new Controller();
    instance.register(_Controller);
    expect(app.get(_Controller)).toBeInstanceOf(_Controller);
    expect(() => {
      instance.register('string');
    }).toThrow();
    expect(() => {
      instance.register(class {});
    }).toThrow();
  });
});
