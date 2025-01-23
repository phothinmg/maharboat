const moth_array = [
  {
    val: "01",
    name: "Jan",
  },
  {
    val: "02",
    name: "Feb",
  },
  {
    val: "03",
    name: "Mar",
  },
  {
    val: "04",
    name: "Apr",
  },
  {
    val: "05",
    name: "May",
  },
  {
    val: "06",
    name: "Jun",
  },
  {
    val: "07",
    name: "Jul",
  },
  {
    val: "08",
    name: "Aug",
  },
  {
    val: "09",
    name: "Sep",
  },
  {
    val: "10",
    name: "Oct",
  },
  {
    val: "11",
    name: "Nov",
  },
  {
    val: "12",
    name: "Dec",
  },
];
// -------------------------------------
const year_input = document.getElementById("year");
const month_input = document.getElementById("month");
const date_input = document.getElementById("date");
// -------------------------------------------------------------
for (let i = 1900; i <= 2100; i++) {
  const opt = document.createElement("option");
  const currentYear = new Date().getFullYear();
  opt.value = i;
  opt.innerHTML = i;
  if (i === currentYear) {
    opt.selected = true;
  }
  year_input.appendChild(opt);
}
for (let i = 1; i <= 31; i++) {
  const opt = document.createElement("option");
  const currendate = new Date().getDate();
  const num = i.toString().length === 1 ? `0${i}` : i;
  opt.value = num;
  opt.innerHTML = num;
  if (i === currendate) {
    opt.selected = true;
  }
  date_input.appendChild(opt);
}
for (let i = 0; i < 12; i++) {
  const opt = document.createElement("option");
  const currentMonth = new Date().getDate();
  const _m = moth_array[i];
  opt.value = _m.val;
  opt.innerHTML = _m.name;
  if (i === currentMonth) {
    opt.selected = true;
  }
  month_input.appendChild(opt);
}
