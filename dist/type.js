console.log();
var Transmission;
(function (Transmission) {
    Transmission[Transmission["speed"] = 100] = "speed";
    Transmission["color"] = "red";
})(Transmission || (Transmission = {}));
function evaluatePrice(vehicle) {
    switch (vehicle.type) {
        case 'truck':
            return vehicle.capacity * Math.PI;
    }
}
const truck = { type: 'truck', capacity: 180 };
evaluatePrice(truck);
