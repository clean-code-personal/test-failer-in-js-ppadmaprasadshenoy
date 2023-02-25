const { assert } = require('chai');
const { alertInCelcius, alertFailureCount } = require('./alerter');

describe('alertInCelcius', () => {
  it('should increase alertFailureCount on non-ok return code', () => {
    alertInCelcius(400.5);
    alertInCelcius(303.6);
    alertInCelcius(32);

    assert.equal(alertFailureCount, 3);
  });
});
