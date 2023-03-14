// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("resolved!");
//     return res.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((e) => console.log("ERROR!", e));

async function pp() {
  let res = await fetch("https://swapi.dev/api/people/1/");
  let data = await res.json();
  console.log(data);
}

pp();
