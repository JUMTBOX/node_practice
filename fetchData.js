const btn = document.querySelector("button");
const userList = document.querySelector("ul");

let i = -1;

const getUserdata1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const newLi = document.createElement("li");
  newLi.innerText = data[i].name;
  userList.appendChild(newLi);
};

btn.addEventListener("click", () => {
  i < 9 ? ((i += 1), getUserdata1()) : alert("더 이상 데이터가 없습니다!");
});
