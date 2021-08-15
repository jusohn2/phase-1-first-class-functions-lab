// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
	

function returnFirstTwoDrivers(){
	const firstTwodrivers = function (drivers){
	}
	return drivers.slice(0,2);
	}
	

function returnLastTwoDrivers(){
	const lasTwodrivers = function(drivers){
	}
	return drivers.slice(2,4);
	}
	

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
	

	// function createFareMultiplier(integer){
	//     return function fareMultiplier(fare){
	//         return `${fare} * ${fare}`;
	//     }
	// }
	

const createFareMultiplier = function (mulitplyingvalue){
	return function (value){
	    return mulitplyingvalue * value; 
	  }
	}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers,driversToReturn) {
    return driversToReturn(drivers);
}
