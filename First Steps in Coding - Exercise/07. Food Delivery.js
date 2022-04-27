


function FooDelivery(input) {
    //Брой пилешки менюта – цяло число в интервала [0 … 99]
    // Брой менюта с риба – цяло число в интервала [0 … 99]
    // Брой вегетариански менюта – цяло число в интервала [0 … 99]
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let chickenCalc = chickenMenu * 10.35;
    let fishCalc  = fishMenu * 12.4;
    let  veganCalc = veganMenu * 8.15
    let totalSum = (chickenCalc + fishCalc + veganCalc) + ((chickenCalc + fishCalc + veganCalc) * 0.2) + 2.5;

    console.log(totalSum)
}

FooDelivery(["2 ",
    "4 ",
    "3 "]);