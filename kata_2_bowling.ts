export function bowlingScore(scores:string[]):number {

    // input is currently ["1","2","3","4"]

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

    let currentFrameIndex = 0;

    scores.forEach((score,index) => {

        const currentFrame = frames[currentFrameIndex];
        // const nextFrame = frames[currentFrameIndex+1];

        if (Number(score) < 10){

            if(currentFrame.roll1 === null){
                currentFrame.roll1 = Number(score);
            } else if (currentFrame.roll2 === null){
                currentFrame.roll2 = Number(score);
                // add the total of this frame to the score
                currentFrame.score += currentFrame.roll1 + currentFrame.roll2;
                // move onto the next frame;
                currentFrameIndex++;
            }
            console.log(frames[index]);
            
        } else {
            // deal with strikes and spares here "#" "/"
            if(score === "/"){
                // spare here
                console.log("this is a spare");
                currentFrame.roll2 = (10 - currentFrame.roll1);
                // set score to zero, but fix it in the next roll??
                currentFrame.score = 10;

                if (index < scores.length -1){
                    const nextFrame = scores[index + 1];
                    currentFrame.score += Number(nextFrame);
                }
                
                
                // + Number(frames[currentFrameIndex+1].score);
                console.log(frames[currentFrameIndex+1].score);
                currentFrameIndex++;
            }
            }
        });

    const finalScore = frames.reduce((total, frames) => {
        return total+frames.score;
    }, 0);
    
    console.log(frames)


    return finalScore;
};