
function pcreat(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let calc = projects * 3;
    console.log(`The architect ${name} will need ${calc} hours to complete ${projects} project/s.`);

}

pcreat(["George", "4"])