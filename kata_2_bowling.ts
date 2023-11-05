export function bowlingScore(scores:string[]):number {

    // input is currently ["4","4","4"]

    // create 10 empty frames and put score into them. if strike or slice, start with 0 and add later.

    // null as number creates a warning, but seems to work. Any hints welcome.
    // I did try as unknown, but that created errors later - and I know that it's a number eventually.

    const frames = [
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 },
        { roll1:null as number, roll2:null as number, score:0 }
    ]

    scores.forEach((score,index) => {

        const currentFrame = frames[index];

        if (Number(score) < 10){

            if(currentFrame.roll1 === null){
                currentFrame.roll1 = Number(score);
            }
            if (currentFrame.roll1 !== null && currentFrame.roll2 === null){
                currentFrame.roll2 = Number(score);
            }
            currentFrame.score += currentFrame.roll1 + currentFrame.roll2;

            } else {
                // deal with strikes and spares here "#" "/"
            }
        });

    const finalScore = frames.reduce((total, frames) => {
        return total+frames.score;
    }, 0);
    
    console.log(frames)


    return finalScore;
};