export function bowlingScore(num:Array<number>):number {
    console.log(num);

    let output = 0;

    num.forEach(element => {
        if(element < 10){
            output += element;
        }
    });

    return output;
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


