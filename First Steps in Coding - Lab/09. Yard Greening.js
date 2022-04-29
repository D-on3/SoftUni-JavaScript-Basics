


function green(input) {

    let area = Number(input[0]) * 7.61;
    let discount =area * 0.18;

    console.log(`The final price is: ${area-discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}


green(['550'])