


function repaint(input) {

    //1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
    let cover = Number(input[0]);
    // 2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]
    let paint = Number(input[1]);
    // 3. Количество разредител (в литри) - цяло число в интервала [1…30]
    let thiner = Number(input[2]);
    // 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
    let hourToComplete = Number(input[3]);
    let  totalCover = (cover+2) * 1.5  //+ (((cover + paint + thiner+0.4) * 0.3)*hourToComplete)
    let  totalPaint = ((paint +(paint * 0.1)) * 14.5)
    let totalThinner = (thiner * 5 )
    let totalSum = (totalThinner + totalPaint +totalCover + 0.4) + (((totalThinner + totalPaint +totalCover + 0.4) * 0.3)*hourToComplete)
    console.log(`${totalSum}`)

}

repaint(["10","11","4","8"]);