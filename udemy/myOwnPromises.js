const fakeRequest = (url) => {
  return new Promise((reslove, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      rand < 0.7
        ? reslove("request success!! your fake data is here!")
        : reject("something went wrong!");
    }, 1000);
  });
};

fakeRequest("/fake/api")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
