import fs from "fs";

const parsedData = fs
  .readFileSync("./day1/data.txt", { encoding: "utf-8" })
  .split("\n\n")
  .map(
    (str) =>
      str
        .split("\n")
        .map((el) => Number(el))
        .reduce((prev, curr) => prev + curr),
    0
  );
const answer1 = parsedData.reduce(
  (prev, curr) => (curr > prev ? curr : prev),
  0
);
console.log(answer1);

const answer2 = parsedData
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((prev, curr) => prev + curr);

console.log(answer2);
