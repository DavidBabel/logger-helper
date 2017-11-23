import sinon from 'sinon';
import {assert} from 'chai';
import {debug, log, warn, error} from '../lib';

describe('logger service', () => {

  let logger;

  beforeEach(() => {

    logger = {
      log: sinon.spy(),
      warn: sinon.spy(),
      debug: sinon.spy(),
      error: sinon.spy()
    };
  });

  it('should log', () => {
    log('foo', logger);

    assert.isOk(logger.log.calledWith('foo'));
  });

  it('should log debug', () => {
    debug('foo', logger);

    assert.isOk(logger.debug.calledWith('foo'));
  });

  it('should log warn', () => {
    warn('foo', logger);

    assert.isOk(logger.warn.calledWith('foo'));
  });

  it('should log error', () => {
    error('foo', logger);

    assert.isOk(logger.error.calledWith('foo'));
  });

});
