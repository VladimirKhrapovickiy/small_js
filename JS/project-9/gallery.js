const container = document.getElementById("project_9");
const gallery = document.getElementById("gallery");

container.onmousemove = function (event) {
  const marginLeft = Number(
    getComputedStyle(container).marginLeft.replace("px", "")
  );
  const marginTop = Number(
    getComputedStyle(container).marginTop.replace("px", "")
  );
  const coordX = event.clientX - marginLeft;
  const coordY = event.pageY - 5208;

  const xValue = coordX / container.clientWidth;
  const yValue = coordY / container.clientHeight;
  const xValueDif = gallery.clientHeight - container.clientWidth;
  const yValueDif = gallery.clientWidth - container.clientHeight;
  const x = xValueDif * xValue * -1;
  const y = yValueDif * yValue * -1;

  gallery.animate(
    {
      transform: `translate(${x}px, ${y}px)`,
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease",
    }
  );
};
