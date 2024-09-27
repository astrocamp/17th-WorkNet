import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

document.addEventListener("DOMContentLoaded", function () {
  const jobSkillElement = document.getElementById("jobSkillData");
  if (jobSkillElement) {
    const jobSkillCounts = JSON.parse(jobSkillElement.textContent);
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
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                return ` ${value}個企業職缺`;
              },
            },
            titleFont: {
              size: 20,
            },
            bodyFont: {
              size: 20,
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }

  const userSkillElement = document.getElementById("userSkillData");
  if (userSkillElement) {
    const userSkillCounts = JSON.parse(userSkillElement.textContent);
    const userLabels = Object.keys(userSkillCounts);
    const userData = Object.values(userSkillCounts);
    const userTotal = userData.reduce((sum, value) => sum + value, 0);

    const userTopData = userData
      .map((value, index) => ({ label: userLabels[index], value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
    const userTopLabels = userTopData.map((item) => item.label);
    const userTopValues = userTopData.map((item) => item.value);

    const userCtx = document
      .getElementById("userSkillPieChart")
      .getContext("2d");
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
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                return ` ${value}個使用者喜愛`;
              },
            },
            titleFont: {
              size: 20,
            },
            bodyFont: {
              size: 20,
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }

  const salaryElement = document.getElementById("averageSalaryData");
  if (salaryElement) {
    const salaryData = JSON.parse(salaryElement.textContent);
    const salaryLabels = Object.keys(salaryData);
    const salaryValues = Object.values(salaryData);

    const salaryCtx = document.getElementById("salaryChart").getContext("2d");
    const salaryChart = new Chart(salaryCtx, {
      type: "bar",
      data: {
        labels: salaryLabels,
        datasets: [
          {
            label: "平均月薪",
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
          },
        },
      },
    });
  }

  const tenureElement = document.getElementById("averageTenureSalaryData");
  if (tenureElement) {
    const tenureSalaryData = JSON.parse(tenureElement.textContent);
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
            label: "平均月薪",
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
          },
        },
      },
    });
  }

  const locationLanguageElement = document.getElementById(
    "locationLanguageData"
  );
  if (locationLanguageElement) {
    const locationMap = {
      Keelung: "基隆",
      Taipei: "台北",
      "New Taipei": "新北",
      Taoyuan: "桃園",
      Hsinchu: "新竹",
      Miaoli: "苗栗",
      Taichung: "台中",
      Changhua: "彰化",
      Nantou: "南投",
      Yunlin: "雲林",
      Chiayi: "嘉義",
      Tainan: "台南",
      Kaohsiung: "高雄",
      Pingtung: "屏東",
      Taitung: "台東",
      Hualien: "花蓮",
      Yilan: "宜蘭",
      Penghu: "澎湖",
      Kinmen: "金門",
      Lienchiang: "連江",
    };

    const locationLanguageData = JSON.parse(
      locationLanguageElement.textContent
    );
    const locationLabels = Object.keys(locationLanguageData).map(
      (location) => locationMap[location] || location
    );

    const languageTrendDatasets = [];
    Object.keys(
      locationLanguageData[Object.keys(locationLanguageData)[0]]
    ).forEach((language) => {
      const languageData = locationLabels.map(
        (location, index) =>
          locationLanguageData[Object.keys(locationLanguageData)[index]][
            language
          ] || 0
      );
      languageTrendDatasets.push({
        label: language,
        data: languageData,
        borderColor: getRandomColor(),
        fill: false,
      });
    });

    const locationCtx = document
      .getElementById("locationLanguageChart")
      .getContext("2d");
    const locationLanguageChart = new Chart(locationCtx, {
      type: "line",
      data: {
        labels: locationLabels,
        datasets: languageTrendDatasets,
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                if (Number.isInteger(value)) {
                  return `${value} 個職缺`;
                }
                return null;
              },
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
            callbacks: {
              label: function (tooltipItem) {
                const language = tooltipItem.dataset.label;
                const value = tooltipItem.raw;
                return ` ${language}：${value}個職缺`;
              },
            },
            titleFont: {
              size: 20,
            },
            bodyFont: {
              size: 20,
            },
          },
        },
      },
    });
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
