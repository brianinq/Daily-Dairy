const form = document.querySelector("#post");
const dailyTable = document.querySelectorAll(".sheds");
const weeklyTable = document.querySelectorAll(".weekly td.shed");
const yearlyIncome = document.querySelector(".yearlyCash span");
const weeklyIncome = document.querySelector(".weeklyCash span");
const changePrice = document.querySelector(".btnPrice");
const price = document.querySelector(".price");
const totalIncome = document.querySelector(".totalIncome");
const yrTotals = document.querySelector(".yrTotals");
const DAYS_OF_WEEK = 7;
const DAYS_IN_YEAR = 365;
let sellingPrice = 45;
let daySum = 0;

function totalProduction(shedA, shedB, shedC, shedD) {
  Array.from(dailyTable)
    .slice(0, dailyTable.length - 1)
    .forEach((element, index) => {
      element.textContent = arguments[index];
      daySum += Number(arguments[index]);
    });
  dailyTable[dailyTable.length - 1].textContent = daySum;
  weeklyProduction(shedA, shedB, shedC, shedD, daySum);
}
function weeklyProduction(shedA, shedB, shedC, shedD, daysTotal) {
  weeklyTable.forEach((element, index) => {
    element.textContent = Number(arguments[index]) * DAYS_OF_WEEK;
  });
  incomeOverTime(sellingPrice, daysTotal);
  getYearlyStats(daySum, sellingPrice);
}
const incomeOverTime = (sellingPrice, opDay, time = 1) => {
  weeklyIncome.textContent = sellingPrice * opDay * DAYS_OF_WEEK;
  yearlyIncome.textContent = sellingPrice * opDay * DAYS_IN_YEAR;
  yrTotals.textContent = opDay * DAYS_IN_YEAR;
  totalIncome.textContent = sellingPrice * opDay * DAYS_IN_YEAR;
};

let shedALitres;
let shedBLitres;
let shedCLitres;
let shedDLitres;

const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  daySum = 0;
  shedBLitres = Number(form["shedB"].value);
  shedALitres = Number(form["shedA"].value);
  shedCLitres = Number(form["shedC"].value);
  shedDLitres = Number(form["shedD"].value);
  totalProduction(shedALitres, shedBLitres, shedCLitres, shedDLitres);
});

changePrice.addEventListener("click", () => {
  let input = prompt("Enter new selling price (Ksh/lit):");
  sellingPrice = Number(input) ? Number(input) : sellingPrice;
  price.textContent = sellingPrice;
  totalProduction(shedALitres, shedBLitres, shedCLitres, shedDLitres);
});
