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
function getYearlyStats(daySum, sellingPrice) {
  const monthlyProduction = {
    jan: [daySum * 31, daySum * 31 * sellingPrice],
    feb: [daySum * 28, daySum * 28 * sellingPrice],
    mar: [daySum * 31, daySum * 31 * sellingPrice],
    apr: [daySum * 30, daySum * 30 * sellingPrice],
    may: [daySum * 31, daySum * 31 * sellingPrice],
    jun: [daySum * 30, daySum * 30 * sellingPrice],
    july: [daySum * 31, daySum * 31 * sellingPrice],
    aug: [daySum * 31, daySum * 31 * sellingPrice],
    sept: [daySum * 30, daySum * 30 * sellingPrice],
    oct: [daySum * 31, daySum * 31 * sellingPrice],
    nov: [daySum * 30, daySum * 30 * sellingPrice],
    dec: [daySum * 31, daySum * 31 * sellingPrice],
  };
  let jan = document.querySelectorAll(".jan");
  [jan[0].textContent, jan[1].textContent] = monthlyProduction["jan"];
  let feb = document.querySelectorAll(".feb");
  [feb[0].textContent, feb[1].textContent] = monthlyProduction["feb"];
  let mar = document.querySelectorAll(".mar");
  [mar[0].textContent, mar[1].textContent] = monthlyProduction["mar"];
  let apr = document.querySelectorAll(".apr");
  [apr[0].textContent, apr[1].textContent] = monthlyProduction["apr"];
  let may = document.querySelectorAll(".may");
  [may[0].textContent, may[1].textContent] = monthlyProduction["may"];
  let jun = document.querySelectorAll(".jun");
  [jun[0].textContent, jun[1].textContent] = monthlyProduction["jun"];
  let july = document.querySelectorAll(".july");
  [july[0].textContent, july[1].textContent] = monthlyProduction["july"];
  let aug = document.querySelectorAll(".aug");
  [aug[0].textContent, aug[1].textContent] = monthlyProduction["aug"];
  let sept = document.querySelectorAll(".sept");
  [sept[0].textContent, sept[1].textContent] = monthlyProduction["sept"];
  let oct = document.querySelectorAll(".oct");
  [oct[0].textContent, oct[1].textContent] = monthlyProduction["oct"];
  let nov = document.querySelectorAll(".nov");
  [nov[0].textContent, nov[1].textContent] = monthlyProduction["nov"];
  let dec = document.querySelectorAll(".dec");
  [dec[0].textContent, dec[1].textContent] = monthlyProduction["dec"];
}
