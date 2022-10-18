const wrapper = document.getElementById("tiles");
let colums = Math.floor(wrapper.clientWidth / 20),
  rows = Math.floor(wrapper.clientHeight / 20);
const colors = [
  "rgb(199,36,177)",
  "rgb(77, 77, 255)",
  "rgb(224,231,34)",
  "rgb(255,173,0)",
  "rgb(219,62,177)",
  "rgb(68,214,44)",
];
let count = -1;
const handleOnlick = (index) => {
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
  tile.onclick = (e) => handleOnlick(index);
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
