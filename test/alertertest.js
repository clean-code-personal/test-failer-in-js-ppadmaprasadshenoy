const { assert } = require('chai');
const {describe,it} = require('mocha');
const { alertInCelcius, fetchAlertFailureCount } = require('../alerter');

describe('alertInCelsius', function() {
    it('should increase alertFailureCount when networkAlertStub returns a non-ok response', function() {
        alertInCelcius(400.5);
        alertInCelcius(303.6);

        assert.equal(fetchAlertFailureCount(),1);
    });
});
