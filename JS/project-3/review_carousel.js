let reviews = [
  {
    id: 1,
    name: "Rebekah Brooks",
    job: "General Manager of Operations",
    img: "./IMG/stok.png",
    text: "Embed codes and share links are generated automatically by Vocal Video and can be used on your product landing pages or dedicated testimonial pages to enhance conversion rates.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./IMG/stok2.png",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./IMG/stok3.png",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "./IMG/stok4.png",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let text = document.querySelector(".text");
let img = document.querySelector(".review-img");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".previous");

let currentReview = 0;
function showInfo(num) {
  img.src = reviews[num].img;
  text.textContent = reviews[num].text;
  name.textContent = reviews[num].name;
  job.textContent = reviews[num].job;
}
window.addEventListener("DOMContentLoaded", function () {
  showInfo(currentReview);
});

nextButton.addEventListener("click", function () {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showInfo(currentReview);
});
previousButton.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showInfo(currentReview);
});
