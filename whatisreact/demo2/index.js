window.onload = () => {
  // Physical DOM
  const rootElement = document.getElementById("root");

  // Virtual DOM
  const root = ReactDOM.createRoot(rootElement);

  const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // this refactor is not in the clip, but would be the obvious next step
  const childrenElements = ints.map((id, index) => {
    return React.createElement("li", { key: id }, ints[index])
  });

  root.render(childrenElements);

};

// const childrenElements = [];

// // use map to create an array of React elements
// ints.map((int) => {
//   childrenElements.push(React.createElement("li", { key: int }, int));
// });

// childrenElements.
//   push(React.createElement("li", { key: ints[0] }, ints[0]));

// childrenElements.
//   push(React.createElement("li", { key: ints[1] }, ints[1]));

// childrenElements.
//   push(React.createElement("li", { key: ints[2] }, ints[2]));
