let i = 0;

let data1;
const getUserdata = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  data1 = JSON.stringify(data[i].name);
};
getUserdata();
console.log(data1);

const btn = document.querySelector("button");
const userList = document.querySelector("ul");

btn.addEventListener("click", () => {
  const userInfo = document.createElement("li");
  let type = typeof getUserdata();
  console.log(type);
  userList.appendChild(userInfo);
  userInfo.innerText = data1;
  console.log(i);
  i < 9 ? (i += 1) : (i = 0);
});
