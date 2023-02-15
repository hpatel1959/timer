const arrOfBeepTimes = process.argv.splice(2);

const timer = function () {
  for (const num of arrOfBeepTimes) {
    if (arrOfBeepTimes.length === 0 || num < 0 || isNaN(num)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
};

timer();
