function calculateFare(){

let distance = document.getElementById("distance").value;
let transport = document.getElementById("transport").value;
let category = document.getElementById("category").value;
function calculateFare() {
    let distance = document.getElementById("distance").value;

    if (distance < 0) {
        alert("Distance cannot be negative!");
        return;
    }

    // continue your calculation here...
}

distance = Number(distance);

let baseFare = 0;
let perKm = 0;

/* Different price per vehicle */

if(transport === "jeepney"){
    baseFare = 12;
    perKm = 20;
}
else if(transport === "motorcycle"){
    baseFare = 20;
    perKm = 10;
}
else if(transport === "bus"){
    baseFare = 15;
    perKm = 30;
}

let fare = baseFare + (distance * perKm);

/* Discounts */

let discount = 0;

if(category === "senior"){
    discount = 0.20;
}
else if(category === "student"){
    discount = 0.15;
}
else if(category === "pwd"){
    discount = 0.20;
}

let finalFare = fare - (fare * discount);

document.getElementById("result").innerHTML =
"Estimated Fare: ₱" + finalFare.toFixed(2);

}