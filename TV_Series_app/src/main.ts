import { Serie } from "./serie.js";
import { series } from "./data.js";


const seriesTable: HTMLElement = document.getElementById("series-table")!;
const averageElm: HTMLElement = document.getElementById("average")!;

if (!seriesTable || !averageElm) {
  console.error("No se encontraron los elementos HTML con ids 'series-table' o 'average'. Revisa index.html");
} else {
  renderSeriesInTable(series);
  averageElm.textContent = `Seasons average: ${getAverageSeasons(series).toFixed(1)}`;
}


function renderSeriesInTable(seriesList: Serie[]): void {
  seriesTable.innerHTML = "";

  seriesList.forEach((serie: Serie) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.link}" target="_blank" rel="noopener noreferrer">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    seriesTable.appendChild(tr);
  });
}

function getAverageSeasons(seriesList: Serie[]): number {
  const total = seriesList.reduce((sum, s) => sum + s.seasons, 0);
  return total / seriesList.length;
}
