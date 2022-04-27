

function bookCalc(input) {
//1. Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]
    let bookPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    let calc = (bookPages / pagesForHour) / days
    console.log(calc)
}

bookCalc(["212","20","2"]);