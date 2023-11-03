import { romanNumerals } from "./Kata_1_roman_numerals";

test("Return X from 10", () => {
  expect(romanNumerals(10)).toEqual('X');
});

test("Return XX from 20", () => {
  expect(romanNumerals(20)).toEqual('XX');
});

test("Return LXVI from 66", () => {
  expect(romanNumerals(66)).toEqual('LXVI');
});

test("Return DCCLV from 755", () => {
  expect(romanNumerals(755)).toEqual('DCCLV');
});

test("Return MMLXXXVII from 2087", () => {
  expect(romanNumerals(2087)).toEqual('MMLXXXVII');
});