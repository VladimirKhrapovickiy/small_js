"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const mouseTrailer = document.querySelector(".mouse_trailer");
  const projectWindow = document.getElementById("project_10");
  projectWindow.onmousemove = (e) => {
    const x = e.clientX - 60;
    const y = e.pageY - 5879;
    const keyFrames = {
      transform: `translate(${x}px, ${y}px)`,
    };
    mouseTrailer.animate(keyFrames, {
      duration: 800,
      fill: "forwards",
    });
  };
});
