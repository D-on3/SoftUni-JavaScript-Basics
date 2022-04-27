


function equipment(input) {
    ///Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]
    let taxForTraining = Number(input[0]);
    let shoes = taxForTraining-(taxForTraining * 0.4);
    let clothes  = shoes - (shoes * 0.2);
    let ball = clothes * 0.25;
    let access = ball * 0.2;
    //Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    // Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    // Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    // Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
    console.log(taxForTraining+shoes+clothes+ball+access)
}
equipment(["365 "])