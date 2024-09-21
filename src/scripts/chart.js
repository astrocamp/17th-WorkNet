import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

document.addEventListener("DOMContentLoaded", function () {
  const jobSkillCounts = JSON.parse(
    document.getElementById("jobSkillData").textContent
  );
  const jobLabels = Object.keys(jobSkillCounts);
  const jobData = Object.values(jobSkillCounts);
  const jobTotal = jobData.reduce((sum, value) => sum + value, 0);

  const jobTopData = jobData
    .map((value, index) => ({ label: jobLabels[index], value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  const jobTopLabels = jobTopData.map((item) => item.label);
  const jobTopValues = jobTopData.map((item) => item.value);

  const jobCtx = document.getElementById("jobSkillPieChart").getContext("2d");
  const jobSkillPieChart = new Chart(jobCtx, {
    type: "pie",
    data: {
      labels: jobTopLabels,
      datasets: [
        {
          label: "Skills",
          data: jobTopValues,
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
            if (
              typeof value !== "number" ||
              Number.isNaN(value) ||
              value === null ||
              value === undefined
            ) {
              return "0%";
            }
            const percentage = ((value / jobTotal) * 100).toFixed(2);
            return `${percentage}%`;
          },
          color: "#fff",
          backgroundColor: "#000",
          borderRadius: 3,
          font: {
            size: 20,
            weight: "bold",
          },
        },
        legend: {
          position: "top",
          labels: {
            font: {
              size: 20,
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 20,
          },
          bodyFont: {
            size: 20,
          },
          callbacks: {
            label: function (context) {
              if (!context || !context.raw) {
                return "";
              }
              const value = context.raw;
              const percentage = ((value / jobTotal) * 100).toFixed(2);
              const label = context.label || "";
              return `${percentage}%`;
            },
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  const userSkillCounts = JSON.parse(
    document.getElementById("userSkillData").textContent
  );
  const userLabels = Object.keys(userSkillCounts);
  const userData = Object.values(userSkillCounts);
  const userTotal = userData.reduce((sum, value) => sum + value, 0);

  const userTopData = userData
    .map((value, index) => ({ label: userLabels[index], value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  const userTopLabels = userTopData.map((item) => item.label);
  const userTopValues = userTopData.map((item) => item.value);

  const userCtx = document.getElementById("userSkillPieChart").getContext("2d");
  const userSkillPieChart = new Chart(userCtx, {
    type: "pie",
    data: {
      labels: userTopLabels,
      datasets: [
        {
          label: "Skills",
          data: userTopValues,
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
            if (
              typeof value !== "number" ||
              Number.isNaN(value) ||
              value === null ||
              value === undefined
            ) {
              return "0%";
            }
            const percentage = ((value / userTotal) * 100).toFixed(2);
            return `${percentage}%`;
          },
          color: "#fff",
          backgroundColor: "#000",
          borderRadius: 3,
          font: {
            size: 20,
            weight: "bold",
          },
        },
        legend: {
          position: "top",
          labels: {
            font: {
              size: 20,
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 20,
          },
          bodyFont: {
            size: 20,
          },
          callbacks: {
            label: function (context) {
              if (!context || !context.raw) {
                return "";
              }
              const value = context.raw;
              const percentage = ((value / userTotal) * 100).toFixed(2);
              const label = context.label || "";
              return `${percentage}%`;
            },
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  const salaryData = JSON.parse(
    document.getElementById("averageSalaryData").textContent
  );
  const salaryLabels = Object.keys(salaryData);
  const salaryValues = Object.values(salaryData);

  const salaryCtx = document.getElementById("salaryChart").getContext("2d");
  const salaryChart = new Chart(salaryCtx, {
    type: "bar",
    data: {
      labels: salaryLabels,
      datasets: [
        {
          label: "平均薪資",
          data: salaryValues,
          backgroundColor: "#36A2EB",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 20,
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: 20,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 20,
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 20,
          },
          bodyFont: {
            size: 20,
          },
        },
        datalabels: {
          display: false,
          color: "#000",
          font: {
            size: 20,
          },
          formatter: (value) => `${value}`,
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  const tenureSalaryData = JSON.parse(
    document.getElementById("averageTenureSalaryData").textContent
  );
  const tenureLabels = Object.keys(tenureSalaryData);
  const tenureValues = Object.values(tenureSalaryData);

  const tenureCtx = document
    .getElementById("tenureSalaryChart")
    .getContext("2d");
  const tenureSalaryChart = new Chart(tenureCtx, {
    type: "bar",
    data: {
      labels: tenureLabels,
      datasets: [
        {
          label: "平均薪資",
          data: tenureValues,
          backgroundColor: "#FF9F40",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              size: 20,
            },
          },
        },
        x: {
          ticks: {
            font: {
              size: 20,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 20,
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 20,
          },
          bodyFont: {
            size: 20,
          },
        },
        datalabels: {
          display: false,
          color: "#000",
          font: {
            size: 20,
          },
          formatter: (value) => `${value}`,
        },
      },
    },
    plugins: [ChartDataLabels],
  });
});
