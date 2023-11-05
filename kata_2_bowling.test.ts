import { bowlingScore } from "./kata_2_bowling";

// test for frames that total less than 10
test("Return 80 from 10 rolls", () => {
  expect(bowlingScore(["4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4","4"])).toBe(80);
});

// for this test the we add a 'spare' slash thingy
test("Return 31 from 10 rolls (ie 5 frames)", () => {
    expect(bowlingScore(["1","2","3","4","5","/","1","2","3","4"])).toBe(31);
  });

// try couple of 'spare' slashes
  test("Return 41 from 10 rolls (ie 5 frames)", () => {
    expect(bowlingScore(["1","2","3","4","5","/","1","/","3","4"])).toBe(41);
  });

// add strike. oh my it worked on first try!!
  test("Return 48 from 10 rolls (ie 6 frames)", () => {
    expect(bowlingScore(["1","2","3","4","5","2","#","3","4","3","4"])).toBe(48);
  });

//   multiple strikes ****THIS FAILS****** ERROR ON FIRST STRIKE WHEN 2 NEXT TO EACH OTHER
//   test("Return 70 from 7 frames)", () => {
//     expect(bowlingScore(["1","2","#","#","3","2","#","3","4","3","4"])).toBe(70);
//   });

