// async function hello() {}

// const hola = async () => {
//   throw "something went wrong!..";
//   return "데이터";
// };

// hola()
//   .then((data) => {
//     console.log(`promise resolved with ${data}`);
//   })
//   .catch((err) => {
//     console.log("oh no! promise rejected!");
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials!";
  if (password === "calm") return "Welcome !!";
  throw "invalid password!!";
};

login("yjey12", "calm")
  .then((msg) => {
    console.log(msg, "Loged in!!");
  })
  .catch((err) => {
    console.log("Error!!!", err);
  });
