let a = 20;
b = 0;

let waitingData = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
