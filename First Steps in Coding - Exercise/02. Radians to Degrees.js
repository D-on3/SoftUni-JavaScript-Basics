

function conv(input) {
    //градус = радиан * 180 / π.
    let gradus = Number((input * 180/Math.PI));
    console.log(gradus);
}

conv(["3.1416"])