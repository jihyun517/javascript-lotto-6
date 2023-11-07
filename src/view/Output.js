import { OUTPUT_MESSAGE, RESULT } from "../constatns/message.js"
import { print, calculateRevenue } from "../utils.js"

export const printAttempt = (attempt) => {
  print(`\n${attempt + OUTPUT_MESSAGE.COUNT}`);
}

export const printRandomNumbersArray = (array) => {
  array.forEach((numbers) => {
    print(numbers);
  })
}

export const printResult = (result, attempt) => {
  print(OUTPUT_MESSAGE.WINNING_TITLE);
  printEachResult(result);
  printRevenue(result, attempt);
}

const printEachResult = (result) => {
  RESULT.forEach((message, index) => {
    print(`${message + result[index]}개`);
  })
}

const printRevenue = (result, attempt) => {
  const revenue = calculateRevenue(result, attempt);
  print(`${OUTPUT_MESSAGE.REVENUE_START + revenue + OUTPUT_MESSAGE.REVENUE_END}`);
}