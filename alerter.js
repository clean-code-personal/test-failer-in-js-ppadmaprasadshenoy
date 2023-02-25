let alertFailureCount = 0;

function networkAlertStub(celcius) {
  console.log(`Alert! Temperature is ${celcius} degrees`);
  // Return 200 for ok
  // Return 500 for not-ok
  // stub always succeeds and returns 200
  return 200;
}

function alertInCelcius(farenheit) {
  const celcius = (farenheit - 32) * 5 / 9;
  const returnCode = networkAlertStub(celcius);
  if (returnCode !== 200) {
    alertFailureCount += 1;
  }
}

module.exports = { alertInCelcius, alertFailureCount };
