
const form = document.getElementById("search-form");
const searchForm = document.getElementById("btn");

const BASE_URL = "https://pixabay.com/api/videos/";
const API_KEY = "25766392-01b12b6ed5ab34bc2910d9c3e";

function videoSearch() {
    let searchWord = document.getElementById("search").value;

    fetch(`${BASE_URL}?key=${API_KEY}&q=${searchWord}`)
      .then((data) => data.json())
        .then((res) => {
            const hitsNumber = Math.round(Math.random() * (20 - 1) + 1);
          const firstVideo = res.hits[hitsNumber].videos.small.url;
          const video = `
            <video
              width="400"
              height="300"
              controls="controls"
              src="${firstVideo}"
              </video >
          `;
            document.getElementById("result").innerHTML = video;
        })
        .finally(() => {
            form.reset();
        });
}

searchForm.addEventListener("click", (e) => {
  e.preventDefault();
  videoSearch();
});