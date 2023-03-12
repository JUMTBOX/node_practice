const changeColor = (color, delay) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      reslove();
    }, delay);
  });
};

const makeRainbow = async () => {
  await changeColor("red", 500);
  await changeColor("orange", 500);
  await changeColor("yellow", 500);
  await changeColor("green", 500);
  await changeColor("blue", 500);
  await changeColor("navy", 500);
  await changeColor("violet", 500);
  return "all done!";
};

makeRainbow().then((msg) => {
  console.log(msg);
});
