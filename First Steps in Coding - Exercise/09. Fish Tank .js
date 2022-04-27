

function Volume(input) {

    //1. Дължина в см – цяло число в интервала [10 … 500]
    let lenght = Number(input[0]);
    // 2. Широчина в см – цяло число в интервала [10 … 300]
    let  width  = Number(input[1]);
    // 3. Височина в см – цяло число в интервала [10… 200]
    let  height = Number(input[2]);
    // 4. Процент  – реално число в интервала [0.000 … 100.000]
    let  percent = Number(input[3]);
    let  fullVolume = (lenght * height * width) / 1000;
    let  wholeVolume = fullVolume * (1 - (percent/100));
    console.log(wholeVolume)

}

Volume(["85 ","75 ","47", "17"]);