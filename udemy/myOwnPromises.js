const fakeRequest = (url) => {
  return new Promise((reslove, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      rand < 0.5
        ? reslove("request success!! your fake data is here!")
        : reject("connection timeout!");
    }, 1000);
  });
};

// fakeRequest("/fake/api")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function makeSecondReq() {
  try {
    let data1 = await fakeRequest("/users");
    console.log(data1, "data1");
    let data2 = await fakeRequest("/posts");
    console.log(data2, "data2");
  } catch (err) {
    console.log("oh no!", err);
  }
}

makeSecondReq();
