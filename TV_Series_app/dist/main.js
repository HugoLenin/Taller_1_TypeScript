import { series } from "./data.js";
// Asegúrate de que estos ids existan en tu index.html:
// <tbody id="series-table"></tbody>
// <p id="average" class="font-weight-bold"></p>
const seriesTable = document.getElementById("series-table");
const averageElm = document.getElementById("average");
if (!seriesTable || !averageElm) {
    // Mensaje claro en consola si los ids están mal
    console.error("No se encontraron los elementos HTML con ids 'series-table' o 'average'. Revisa index.html");
}
else {
    renderSeriesInTable(series);
    averageElm.textContent = `Seasons average: ${getAverageSeasons(series).toFixed(1)}`;
}
// ----------------------------------------------------------------
// FUNCIONES
// ----------------------------------------------------------------
function renderSeriesInTable(seriesList) {
    // vaciamos por si algo quedó antes
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
