
function supply(input) {
    //Пакет химикали - 5.80 лв.
    //     Пакет маркери - 7.20 лв.
    //     Препарат - 1.20 лв (за литър)

    //Брой пакети химикали - цяло число в интервала [0...100]
    let pens = Number(input[0]* 5.8);
    // Брой пакети маркери - цяло число в интервала [0...100]
    let markers = Number(input[1]*7.2);
    // Литри препарат за почистване на дъска - цяло число в интервала [0…50]
    let detergent = Number(input[2]*1.2);
    // Процент намаление - цяло число в интервала [0...100]
    let discount = Number(input[3]/100);
    let total = (pens + markers + detergent);
    let totalSum = total - (total * discount);
    console.log(totalSum);
}

supply(["2 ","3","4","25"]);

