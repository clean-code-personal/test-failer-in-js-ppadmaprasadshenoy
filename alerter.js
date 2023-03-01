let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok (random)
    if(celcius < 200)
        return 200;
    else
        return 500;
}

function alertInCelcius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celsius);
    if (returnCode !== 200) {
        alertFailureCount += 1;
    }
}

function fetchAlertFailureCount(){
    return alertFailureCount;
}

module.exports = {
       alertInCelcius,
       fetchAlertFailureCount
  };