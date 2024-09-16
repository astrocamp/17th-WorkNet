import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

document.addEventListener("DOMContentLoaded", function () {
  const skillCounts = JSON.parse(
    document.getElementById("skill-data").textContent
  );

  const labels = Object.keys(skillCounts);
  const data = Object.values(skillCounts);
  const total = data.reduce((sum, value) => sum + value, 0);

  const topData = data
    .map((value, index) => ({ label: labels[index], value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  const topLabels = topData.map((item) => item.label);
  const topValues = topData.map((item) => item.value);
  const topTotal = topValues.reduce((sum, value) => sum + value, 0);

  const ctx = document.getElementById("skillPieChart").getContext("2d");
  const skillPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: topLabels,
      datasets: [
        {
          label: "Skills",
          data: topValues,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        datalabels: {
          display: true,
          formatter: (value) => {
            if (typeof value !== "number" || Number.isNaN(value)) {
              return "0%";
            }
            const percentage = ((value / topTotal) * 100).toFixed(2);
            return `${percentage}%`;
          },
          color: "#fff",
          backgroundColor: "#000",
          borderRadius: 3,
          font: {
            weight: "bold",
          },
        },
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              if (!context || !context.raw) {
                return "";
              }
              const value = context.raw;
              const percentage = ((value / topTotal) * 100).toFixed(2);
              const label = context.label || "";
              return `${percentage}%`;
            },
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
});
