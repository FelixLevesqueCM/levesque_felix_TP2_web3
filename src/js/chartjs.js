import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js";

let ctx = document.querySelector("#graphique").getContext("2d");
let options = {
  type: "line",
  data: {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    datasets: [
      {
        label: "Titre du dataset A",
        data: [49, 49, 42, 42, 37, 31, 31, 23, 22]
      }
    ]
  },
  options: {
    //responsive: false
    maintainAspectRatio: false
  }
};

new Chart(ctx, options);