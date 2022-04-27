


function fromTo(input) {
    let input1 = Number(input[0]);
    if (input1 < 100){
        console.log('Less than 100');
    }
    else if( input1 > 200){
        console.log('Greater than 200');
    }
    else if (100 > input1 < 200){
        console.log('Between 100 and 200');
    }

}



fromTo(["200"]);