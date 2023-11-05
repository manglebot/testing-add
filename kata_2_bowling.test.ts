import { bowlingScore } from "./kata_2_bowling";

// test for frames that total less than 10
// test("Return 80 from 10 rolls", () => {
//   expect(bowlingScore(["4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4"])).toBe(80);
// });

// // for this test the we add a 'spare' slash thingy
test("Return 10 from 4 rolls (ie 2 frames)", () => {
    expect(bowlingScore(["1","2","3","4","5","/","1","2","3","4"])).toBe(31);
  });

// test("Return 6 from 3 rolls of 1", () => {
//     expect(bowlingScore([2,1,3,1,4,1])).toBe(12);
//   });

//   test("Return 6 from 3 rolls of 1", () => {
//     expect(bowlingScore([4,6,3,3])).toBe(19);
//   });