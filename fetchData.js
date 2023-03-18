const btn = document.querySelector("button");
const userList = document.querySelector("ul");

let i = -1;

let data1;
// const getUserdata = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   data1 = data[i].name;
// };
// getUserdata();

// btn.addEventListener("click", () => {
//   const userInfo = document.createElement("li");
//   userList.appendChild(userInfo);
//   userInfo.innerText = data1;
//   console.log(i);
//   i < 9 ? (i += 1) : (i = 0);
//   getUserdata();
// });

const getUserdata1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const newLi = document.createElement("li");
  newLi.innerText = data[i].name;
  userList.appendChild(newLi);
};

btn.addEventListener("click", () => {
  getUserdata1();
  i < 9 ? (i += 1) : (i = 0);
});
