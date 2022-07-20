// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) { 
    return (fare) => { return fare * mult; };
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}