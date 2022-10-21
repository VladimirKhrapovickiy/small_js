const wrapper = document.getElementById("tiles");

let colums = Math.floor(wrapper.clientWidth / 15),
  rows = Math.floor(wrapper.clientHeight / 15);
const colors = [
  // "#48494a",
  // "#272727",
  "#cdcdcd",
  "#000000",
  "#cdcdcd",
  // "rgb(68,214,44)",
];
let count = -1;
const handleOnClick = (index) => {
  count++;
  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [colums, rows],
      from: index,
    }),
  });
};
const createTile = (index) => {
  const tile = document.createElement("div");

  tile.classList.add("tile");
  tile.onclick = (e) => handleOnClick(index);
  wrapper.style.setProperty("--colums", colums);
  wrapper.style.setProperty("--rows", rows);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};
createTiles(colums * rows);
