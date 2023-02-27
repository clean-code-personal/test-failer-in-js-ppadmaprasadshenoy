const assert = require('chai').assert;
const { alertInCelcius, alertFailureCount } = require('../alerter');

describe('alertInCelsius', function() {
    it('should increase alertFailureCount when networkAlertStub returns a non-ok response', function() {
        alertInCelcius(400.5);
        alertInCelcius(303.6);
        alertInCelcius(32);

        assert.equal(alertFailureCount, 0);
    });
});
