window.onload = () => {
  const rootElement = document.getElementById("root");
  const button = document.createElement("button");

  button.innerHTML = "Click me for current date";

  button.addEventListener("click", () => {
    button.innerHTML = new Date().toString();
  });

  rootElement.appendChild(button);

  const divForListElement = document.getElementById("divForList");
  const unOrderedList = document.createElement("ul");

  const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  ints.forEach((i) => {
    let li = document.createElement("li");
    li.innerHTML = i;
    unOrderedList.appendChild(li);
  });

  divForListElement.appendChild(unOrderedList);
};
