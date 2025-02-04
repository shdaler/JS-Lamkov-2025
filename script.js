const clientName = "Max";
const age = 20;
const hasMuchMoney = false;
const hasGoodJob = false;
const hasMotivation = true;
const hasFreeTime = true;

if (clientName !== "Max") {
  console.log("Please call Max");
} else if (!hasMuchMoney || !hasGoodJob || (hasMotivation && hasFreeTime)) {
  console.log("Max should more learn frontend");
} else {
  console.log(
    "You are very rich, so you can no work forever, or you have maybe good work, or you just no need it"
  );
}
