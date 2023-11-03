

const mainNumerals: Array<{ value:number; numeral:string }> = [
    { value:1, numeral:'I' },
    { value:4, numeral:'IV' },
    { value:5, numeral:'V' },
    { value:9, numeral:'IX' },
    { value:10, numeral:'X' },
    { value:40, numeral:'XL' },
    { value:50, numeral:'L' },
    { value:90, numeral:'LC' },
    { value:100, numeral:'C' },
    { value:400, numeral:'CD' },
    { value:500, numeral:'D' },
    { value:900, numeral:'CM' },
    { value:1000, numeral:'M' }
];

export function romanNumerals(num:number):string {
    
    // split the number into 1's, 10's and 100's and 1000's
    // 123 = 100, 20, 3
    // CXXIII
    // 287   200 80 7
    // CCLXXXVII

    const test = splitToDigit(num);
    const splitNumberChunks: number[] = [];
    
    function splitToDigit(n: number){
            return (n + '').split('').map((i) => { return Number(i); })
          }
          
    let multiplier = 1;
          
    for (let i=test.length -1; i >= 0; i--){
        splitNumberChunks.unshift(test[i]* multiplier);
          multiplier *= 10;
            console.log(splitNumberChunks);
          };
        //   this returns an array. need to turn into roman

        splitNumberChunks.forEach(element => {
            if(element of splitNumberChunks >){
                // do something;
            }
        });

        // I accidentally saw this answer on the web. it's so simple. ouch!
        // for ( i in lookup ) {
        //     while ( num >= lookup[i] ) {
        //       roman += i;
        //       num -= lookup[i];
        //     }

        const output: string = "[100,20,3]";

    return output;
};