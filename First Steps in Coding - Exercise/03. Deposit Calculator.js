

function deposit(input) {
    //1. Депозирана сума – реално число в интервала [100.00 … 10000.00]
    // 2. Срок на депозита (в месеци) – цяло число в интервала [1 … 12]
    // 3. Годишен лихвен процент – реално число в интервала [0.00 … 100.00]
    let depositSum = Number(input[0]);
    let durationOfDeposit = Number(input[1]);
    let yearIntrest = Number(input[2]/100);
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let totalSum = depositSum + durationOfDeposit *((depositSum*yearIntrest)/12);
    console.log(totalSum);
}

deposit(["200 ","3 ","5.7"]);