export function bowlingScore(num:number[][]):number {
    console.log("num = "+num);

    console.log("num[0] = "+num[0]);

    console.log("num[1] = "+num[1]);

    console.log("num[0][0] = "+num[0][0]);

    let workingTotal = 0;

    // first go.
    if(num[0][0]+num[0][1] < 10 ){
        workingTotal = num[0][0]+num[0][1];
    } else if (num[0][0] === 10 || num[0][1] === 10 ){//if 1st go is strike..
        if(num[1][0] === 10){ //if 2nd go is also strike.. (adding to first go)
            workingTotal += 20 
            if(num[2][0] === 10) { //if 3rd go is strike.. (also adding to first go)
            workingTotal +=10;
            } else {
                workingTotal += num[2][0];// 2nd go is strike, but not 3rd.
            }
        }
        workingTotal += 10 + num[1][0]+num[1][1]; //strike (but normal after)
    } else if (num[0][0]+num[0][1] === 10){//spare
        if(num[1][0] === 10){ //if next go is also strike..
            workingTotal += 20;
        } else {
            workingTotal += 10 + num[1][0]; //spare (but next go is normal)
        }
        
    };

    console.log("workingTotal = "+workingTotal);
    
    // this will fail if there are two strikes in a row... needs to skip somehow.

    // second go.
    // if(num[1][0]+num[1][1] < 10 ){
    //     workingTotal = num[1][0]+num[1][1];
    // } else if (num[1][0] === 10 || num[1][1] === 10 ){
    //     workingTotal += 10 + num[2][0]+num[2][1]; //strike
    // } else if (num[0][0]+num[0][1] === 10){
    //     workingTotal += 10 + num[1][0]; //spare
    // };



    

    // let output = 0;

    // let spare = 0;

    // const tempTotal = num[0][2];

    // console.log("tempTotal: "+tempTotal);

    // num.forEach(element => {
    //     if(element[0] < 10){
    //         output += element;
    //     } else {
    //         spare += element;
    //     }
    // });

    // spare += next element.


    return 33;
};





// 10, up to 2 per go
// strike - wait for 2 goes and add the next 2 scores
// spare - wait 1 go and add the next score to this

// start with funciton that throws first ball.

// if < 10 , throw 2nd ball. If 10 then it's a Strike.
// (save strike to variable... and store till needed)
// add two together. if < 10 then that's the score for that round.
// if total = 10 then it's a Spare
// (save Spare to variable and store till needed).

// how many goes are there?
// 12.
// 20
// some maths to work out the number of goes.
// 10 rounds. each round has variable num of throws.


// 