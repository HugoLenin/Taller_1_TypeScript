import { series } from "./data.js";

const seriesTable = document.getElementById("series-table");
const averageElm = document.getElementById("average");
if (!seriesTable || !averageElm) {
    
    console.error("No se encontraron los elementos HTML con ids 'series-table' o 'average'. Revisa index.html");
}
else {
    renderSeriesInTable(series);
    averageElm.textContent = `Seasons average: ${getAverageSeasons(series).toFixed(1)}`;
}

function renderSeriesInTable(seriesList) {
    seriesTable.innerHTML = "";
    seriesList.forEach((serie) => {
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
function getAverageSeasons(seriesList) {
    const total = seriesList.reduce((sum, s) => sum + s.seasons, 0);
    return total / seriesList.length;
}
