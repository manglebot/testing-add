export function bowlingScore(scores:string[]):number {

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
    let multipleStrikes = 0;

    scores.forEach((score,index) => {

        const currentFrame = frames[currentFrameIndex];

        // non strikes/spares here
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
            
         // deal with strikes and spares below "#" "/"

        } else if(score === "/"){
                // spare here
                console.log(frames);
                currentFrame.roll2 = (10 - currentFrame.roll1);
                // set score to zero, but fix it in the next roll??
                currentFrame.score = 10;

                if (index < scores.length -1){
                    const nextFrame = scores[index + 1];
                    currentFrame.score += Number(nextFrame);
                }

                console.log(frames[currentFrameIndex+1].score);
                currentFrameIndex++;
                
        } else if (score === "#"){
            // strike here

            // ISSUE - THE 1ST STRIKE OF MULTIPLE ISN'T CALCULATING PROPERLY!!

            // first strike add 10
            if (multipleStrikes === 0) {
                currentFrame.roll1 = 10;
            }

            multipleStrikes ++;

            if (multipleStrikes => 1) {
                // Add 10 points for each new strike
                currentFrame.score += multipleStrikes * 10;
              }

              if (multipleStrikes < 2) {
                // Only process the first two consecutive strikes
                if (index < scores.length - 1) {
                  if (scores[index + 1] === "#") {
                    multipleStrikes++;
                  } else {
                    currentFrame.score += Number(scores[index + 1]);
                    if (index < scores.length - 2) {
                      currentFrame.score += Number(scores[index + 2]);
                    }
                  }
                }
            };
            multipleStrikes = 0;
            currentFrameIndex++;
        } 

        });

    const finalScore = frames.reduce((total, frames) => {
        return total+frames.score;
    }, 0);
    
    console.log(frames)


    return finalScore;
};