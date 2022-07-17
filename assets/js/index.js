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
