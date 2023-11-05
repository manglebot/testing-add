export function bowlingScore(scores:string[]):number {

    // input is currently ["4","4","4"]

    // create 10 empty frames and put score into them. if strike or slice, start with 0 and add later.
    const frames = [
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 },
        { roll1:null as unknown, roll2:null as unknown, score:0 }
    ]

    scores.forEach((score,index) => {

        const currentFrame = frames[index];

        if (Number(score) < 10){

            if(currentFrame.roll1 === null){
                currentFrame.roll1 = Number(score);
            }
            if(currentFrame.roll2 === null){
                currentFrame.roll2 = Number(score);
            }
            // push number to frames thingy...
            //frames[index].score += Number(score);
            console.log(frames);
        }
        // creat else rules for strikes etc.
    });

    console.log("scores: "+scores)


    return 12;
};