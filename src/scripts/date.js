import Alpine from "alpinejs";
import AirDatepicker from "air-datepicker";

Alpine.data("date_picker", () => ({
  init() {
    const dp = new AirDatepicker("#id_birth", {
      container: "#date_container",
      dateFormat: "yyyy-MM-dd",
      locale: {
        days: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
        daysShort: ["日", "一", "二", "三", "四", "五", "六"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六"],
        months: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        monthsShort: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        today: "今天",
        clear: "清除",
        dateFormat: "yyyy-MM-dd",
        firstDay: 1,
      },
      onSelect: function () {
        dp.hide();
      },
    });
  },
}));
