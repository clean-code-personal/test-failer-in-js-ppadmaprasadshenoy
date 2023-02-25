const chai = require('chai');
const assert = chai.assert;

describe('alertInCelcius', function() {
    it('should increase alertFailureCount when networkAlertStub returns a non-ok response', function() {
        let alertFailureCount = 0;

        alertInCelcius(400.5);
        alertInCelcius(303.6);
        alertInCelcius(32);

        assert.equal(alertFailureCount, 1);
    });
});