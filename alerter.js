// let alertFailureCount = 0;
// function networkAlertStub(celcius) {
//     console.log(`Alert! Temperature is ${celcius} degrees`);
//     // Return 200 for ok
//     // Return 500 for not-ok
//     // stub always succeeds and returns 200
//     return 200;
// }
// function alertInCelcius(farenheit) {
//     const celcius = (farenheit - 32) * 5 / 9;
//     const returnCode = networkAlertStub(celcius);
//     if (returnCode != 200) {
//         // non-ok response is not an error! Issues happen in life!
//         // let us keep a count of failures to report
//         // However, this code doesn't count failures!
//         // Add a test below to catch this bug. Alter the stub above, if needed.
//         alertFailureCount += 0;
//     }
// }
// alertInCelcius(400.5);
// alertInCelcius(303.6);
// console.log(`${alertFailureCount} alerts failed.`);
// console.log('All is well (maybe!)');

let alertFailureCount = 0;
class NetworkCommunicator {
    alert(celsius) {
        console.log(`Alert! Temperature is ${celcius} degrees`);
        return 200;             // stub always succeeds and returns 200
    }
}

class AlertSystem {
    constructor(networkCommunicator) {
        this.networkCommunicator = networkCommunicator;
    }
    alertInCelsius(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        const returnCode = this.networkCommunicator.alert(celsius);
        if (returnCode !== 200) {
            alertFailureCount += 1;
        }
    }
}

const networkCommunicator = new NetworkCommunicator();
const alertSystem = new AlertSystem(networkCommunicator);

alertSystem.alertInCelsius(400.5);
alertSystem.alertInCelsius(303.6);

if (alertFailureCount !== 0) {
    console.log(`${alertFailureCount} alerts failed.`);
    console.log('Test failed!');
} else {
    console.log(`${alertFailureCount} alerts failed.`);
    console.log('Test passed!');
}
