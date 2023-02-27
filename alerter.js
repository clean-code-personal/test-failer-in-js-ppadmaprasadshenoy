let alertFailureCount = 0;

function networkAlertStub(celsius) {
    console.log(`Alert! Temperature is ${celsius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok (random)
    return 200;
}

function alertInCelcius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celsius);
    if (returnCode !== 200) {
        alertFailureCount += 1;
    }
}

module.exports = {
    alertInCelcius,
    alertFailureCount
};
