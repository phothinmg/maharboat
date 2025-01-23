// ----------------------------------------
(function () {
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
})();

// ------------------------------------------------------------------
var MPLNT = [
  "စနေ",
  "တနင်္ဂနွေ",
  "တနင်္ဂလာ",
  "အင်္ဂါ",
  "ဗုဒ္ဓဟူး",
  "ကြာသာပတေး",
  "သောကြာ",
  "ရာဟု",
];
var EPLNT = ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI", "YARHU"];
var EWD = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
var MWD = [
  "စနေ",
  "တနင်္ဂနွေ",
  "တနင်္ဂလာ",
  "အင်္ဂါ",
  "ဗုဒ္ဓဟူး",
  "ကြာသာပတေး",
  "သောကြာ",
];
var EM = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var EMB = ["Binga", "Atun", "Yaza", "Adipati", "Marana", "Thike", "Puti"];
var MMB = ["ဘင်ဂ", "အထွန်း", "ရာဇ", "အဓိပတိ", "မရဏ", "သိုက်", "ပုတိ"];
var joage = [
  {
    id: 1,
    name: "တနင်္ဂနွေ",
    ak: 1,
    age: 6,
  },
  {
    id: 2,
    name: "တနင်္ဂလာ",
    ak: 2,
    age: 15,
  },
  {
    id: 3,
    name: "အင်္ဂါ",
    ak: 3,
    age: 8,
  },
  {
    id: 4,
    name: "ဗုဒ္ဓဟူး",
    ak: 4,
    age: 17,
  },
  {
    id: 5,
    name: "စနေ",
    ak: 0,
    age: 10,
  },
  {
    id: 6,
    name: "ကြာသာပတေး",
    ak: 5,
    age: 19,
  },
  {
    id: 7,
    name: "ရာဟု",
    ak: "",
    age: 12,
  },
  {
    id: 8,
    name: "သောကြာ",
    ak: 6,
    age: 21,
  },
];

// ------------------------------------------------------------------------------------------
function time2D(hour, minutes, seconds) {
  return (hour - 12) / 24 + minutes / 1440 + seconds / 86400;
}
function G2J(
  year,
  month,
  date,
  hour = 12,
  minutes = 0,
  seconds = 0,
  ct = 0,
  SG = 2361222
) {
  var z = time2D(hour, minutes, seconds),
    a = Math.floor((14 - month) / 12);
  year = year + 4800 - a;
  month = month + 12 * a - 3;
  var jd =
    date +
    Math.floor((153 * month + 2) / 5) +
    365 * year +
    Math.floor(year / 4);
  if (ct === 1) {
    jd = jd - Math.floor(year / 100) + Math.floor(year / 400) - 32045;
  } else if (ct === 2) {
    jd = jd - 32083;
  } else {
    jd = jd - Math.floor(year / 100) + Math.floor(year / 400) - 32045;
    if (jd < SG) {
      jd =
        date +
        Math.floor((153 * month + 2) / 5) +
        365 * year +
        Math.floor(year / 4) -
        32083;
      if (jd > SG) jd = SG;
    }
  }

  return jd + z;
}
// ---------------------------------------------------------------------------------------------
function bSearch2(k, A) {
  var i = 0;
  var l = 0;
  var u = A.length - 1;
  while (u >= l) {
    i = Math.floor((l + u) / 2);
    if (A[i][0] > k) u = i - 1;
    else if (A[i][0] < k) l = i + 1;
    else return i;
  }
  return -1;
}

function bSearch1(k, A) {
  var i = 0;
  var l = 0;
  var u = A.length - 1;
  while (u >= l) {
    i = Math.floor((l + u) / 2);
    if (A[i] > k) u = i - 1;
    else if (A[i] < k) l = i + 1;
    else return i;
  }
  return -1;
}
// ----------------------------------------------------------------------------------------------
function GetMyConst(my) {
  var EI,
    WO,
    NM,
    EW = 0,
    i;
  var fme, wte;
  // The third era (the era after Independence 1312 ME and after)
  if (my >= 1312) {
    EI = 3;
    WO = -0.5;
    NM = 8;
    fme = [[1377, 1]];
    wte = [1344, 1345];
  }
  // The second era (the era under British colony: 1217 ME - 1311 ME)
  else if (my >= 1217) {
    EI = 2;
    WO = -1;
    NM = 4;
    fme = [
      [1234, 1],
      [1261, -1],
    ];
    wte = [1263, 1264];
  }
  // The first era (the era of Myanmar kings: ME1216 and before)
  // Thandeikta (ME 1100 - 1216)
  else if (my >= 1100) {
    EI = 1.3;
    WO = -0.85;
    NM = -1;
    fme = [
      [1120, 1],
      [1126, -1],
      [1150, 1],
      [1172, -1],
      [1207, 1],
    ];
    wte = [1201, 1202];
  }
  // Makaranta system 2 (ME 798 - 1099)
  else if (my >= 798) {
    EI = 1.2;
    WO = -1.1;
    NM = -1;
    fme = [
      [813, -1],
      [849, -1],
      [851, -1],
      [854, -1],
      [927, -1],
      [933, -1],
      [936, -1],
      [938, -1],
      [949, -1],
      [952, -1],
      [963, -1],
      [968, -1],
      [1039, -1],
    ];
    wte = [];
  }
  // Makaranta system 1 (ME 0 - 797)
  else {
    EI = 1.1;
    WO = -1.1;
    NM = -1;
    fme = [
      [205, 1],
      [246, 1],
      [471, 1],
      [572, -1],
      [651, 1],
      [653, 2],
      [656, 1],
      [672, 1],
      [729, 1],
      [767, -1],
    ];
    wte = [];
  }
  i = bSearch2(my, fme);
  if (i >= 0) WO += fme[i][1]; // full moon day offset exceptions
  i = bSearch1(my, wte);
  if (i >= 0) EW = 1; //correct watat exceptions

  return { EI: EI, WO: WO, NM: NM, EW: EW };
}
// --------------------------------------------------------------------------------
function cal_watat(my) {
  //get data for respective era
  var SY = 1577917828.0 / 4320000.0; //solar year (365.2587565)
  var LM = 1577917828.0 / 53433336.0; //lunar month (29.53058795)
  var MO = 1954168.050623; //beginning of 0 ME for MMT
  var c = GetMyConst(my); // get constants for the corresponding calendar era
  var TA = (SY / 12 - LM) * (12 - c.NM); //threshold to adjust
  var ed = (SY * (my + 3739)) % LM; // excess day
  if (ed < TA) ed += LM; //adjust excess days
  var fm = Math.round(SY * my + MO - ed + 4.5 * LM + c.WO); //full moon day of 2nd Waso
  var TW = 0,
    watat = 0; //find watat
  if (c.EI >= 2) {
    //if 2nd era or later find watat based on excess days
    TW = LM - (SY / 12 - LM) * c.NM;
    if (ed >= TW) watat = 1;
  } else {
    //if 1st era,find watat by 19 years metonic cycle
    //Myanmar year is divided by 19 and there is intercalary month
    //if the remainder is 2,5,7,10,13,15,18
    //https://github.com/kanasimi/CeJS/blob/master/data/date/calendar.js#L2330
    watat = (my * 7 + 2) % 19;
    if (watat < 0) watat += 19;
    watat = Math.floor(watat / 12);
  }
  watat ^= c.EW; //correct watat exceptions
  return { fm: fm, watat: watat };
}

function cal_my(my) {
  var yd = 0,
    y1,
    nd = 0,
    werr = 0,
    fm = 0;
  var y2 = cal_watat(my);
  var myt = y2.watat;
  do {
    yd++;
    y1 = cal_watat(my - yd);
  } while (y1.watat == 0 && yd < 3);
  if (myt) {
    nd = (y2.fm - y1.fm) % 354;
    myt = Math.floor(nd / 31) + 1;
    fm = y2.fm;
    if (nd != 30 && nd != 31) {
      werr = 1;
    }
  } else fm = y1.fm + 354 * yd;
  var tg1 = y1.fm + 354 * yd - 102;
  return { myt: myt, tg1: tg1, fm: fm, werr: werr };
}
function j2m(jdn) {
  jdn = Math.round(jdn); //convert jdn to integer
  var SY = 1577917828.0 / 4320000.0; //solar year (365.2587565)
  var MO = 1954168.050623; //beginning of 0 ME
  var my, yo, dd, myl, mmt, a, b, c, e, f, mm, md;
  my = Math.floor((jdn - 0.5 - MO) / SY); //Myanmar year
  yo = cal_my(my); //check year
  dd = jdn - yo.tg1 + 1; //day count
  b = Math.floor(yo.myt / 2);
  c = Math.floor(1 / (yo.myt + 1)); //big wa and common yr
  myl = 354 + (1 - c) * 30 + b; //year length
  mmt = Math.floor((dd - 1) / myl); //month type: late =1 or early = 0
  dd -= mmt * myl;
  a = Math.floor((dd + 423) / 512); //adjust day count and threshold
  mm = Math.floor((dd - b * a + c * a * 30 + 29.26) / 29.544); //month
  e = Math.floor((mm + 12) / 16);
  f = Math.floor((mm + 11) / 16);
  md = dd - Math.floor(29.544 * mm - 29.26) - b * e + c * f * 30; //day
  mm += f * 3 - e * 4 + 12 * mmt; // adjust month numbers for late months
  return { myt: yo.myt, my: my, mm: mm, md: md };
}
// ==================================================
var enumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var mnumber = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];
function emnum(num) {
  const _num = num.toString().split("");
  let a = [];
  _num.map((i) => {
    var index = enumber.indexOf(i);
    a.push(mnumber[index]);
  });
  return a.join("");
}
// ===================================================
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
// --------------------------------------------------------------------------------------------
function date_value() {
  let _year = year_input.value;
  let _month = month_input.value;
  let _date = date_input.value;
  return `${_year}-${_month}-${_date}`;
}
var docArray = [
  document.getElementById("mb-1"),
  document.getElementById("mb-2"),
  document.getElementById("mb-3"),
  document.getElementById("mb-4"),
  document.getElementById("mb-5"),
  document.getElementById("mb-6"),
  document.getElementById("mb-7"),
];
// ----------------------------------
function mahabote() {
  const dateValue = new Date(date_value());
  const y = dateValue.getFullYear();
  const m = dateValue.getMonth() + 1;
  const d = dateValue.getDate();
  const jdn = G2J(y, m, d);
  const mmDate = j2m(jdn);
  const wdn = (jdn + 2) % 7;
  const ewds = EWD[wdn];
  const mwds = MWD[wdn];
  const mhbn = (mmDate.my - wdn) % 7;
  const mhbs = MMB[mhbn];
  const eee = mmDate.my % 7;
  //   ------------------------------------------------
  const mhba = [
    { id: 1, remin: 1, rem: "၁", cla: "aung" },
    { id: 2, remin: 4, rem: "၄", cla: "lan" },
    { id: 3, remin: 0, rem: "၀", cla: "htuu" },
    { id: 4, remin: 3, rem: "၃", cla: "sit" },
    { id: 5, remin: 6, rem: "၆", cla: "thu" },
    { id: 6, remin: 2, rem: "၂", cla: "kyi" },
    { id: 7, remin: 5, rem: "၅", cla: "pwe" },
  ];

  var a, b, c, z;
  a = mhba.find((num) => num.remin === eee);
  z = a.id;
  b = mhba.filter((num) => num.id > z);
  c = mhba.filter((num) => num.id < z);

  var mmb = [a, ...b, ...c];
  //   ------------------------------------------------------
  var age = getAge(date_value());
  var aa = joage.find((x) => x.ak === wdn);
  var _id = aa.id;
  var bb = joage.filter((x) => x.id > _id);
  var cc = joage.filter((x) => x.id < _id);
  var dd = [aa, ...bb, ...cc];
  let ty;
  var sum = 0;
  for (var i = 0; dd.length > i; i++) {
    if (sum >= age) {
      break;
    }
    sum += dd[i].age;
    ty = dd[i].name;
  }

  var baly = sum - age;
  var personAge = emnum(age);
  var balanceYear = emnum(baly);
  // -----------------------------------------------------------
  for (let i = 0; i < docArray.length; i++) {
    const doc = docArray[i];
    const _mmb = mmb[i];
    if (_mmb.remin === wdn) {
      doc.style.color = "red";
    }
    doc.innerHTML = _mmb.rem;
  }
  // =======================================================
  document.getElementById("tb-1").innerHTML = mmb[0].rem;
  document.getElementById("tb-2").innerHTML = `${mhbs}ဖွား`;
  document.getElementById("tb-3").innerHTML = `${personAge}နှစ်`;
  document.getElementById("tb-4").innerHTML = ty;
  document.getElementById("tb-5").innerHTML = `${balanceYear}နှစ်`;
}
function clearDiv() {
  // -----------------------------------------------------------
  for (let i = 0; i < docArray.length; i++) {
    const doc = docArray[i];
    doc.style.color = "inherit";
    doc.innerHTML = "";
  }
  // =======================================================
  document.getElementById("tb-1").innerHTML = "";
  document.getElementById("tb-2").innerHTML = "";
  document.getElementById("tb-3").innerHTML = "";
  document.getElementById("tb-4").innerHTML = "";
  document.getElementById("tb-5").innerHTML = "";
}
// ===============================================================================
function saveAsImage() {
  html2canvas(document.getElementById("result")).then((canvas) => {
    const link = document.createElement("a");

    link.download = "maharbote.png"; // Set filename

    link.href = canvas.toDataURL("image/png"); // Image format

    link.click();
  });
}
// ====================================================================================
const datetime_btn = document.getElementById("result-btn");
const clear_btn = document.getElementById("clear-btn");
datetime_btn.addEventListener("click", mahabote);
clear_btn.addEventListener("click", clearDiv);

var _themevar = "colorSchema";
var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
var themeBtn = document.getElementById("theme");
var _el = document.querySelector("html");

function getLocalTheme() {
  return localStorage.getItem(_themevar);
}

function applyTheme(theme) {
  _el.setAttribute("data-theme", theme);
  localStorage.setItem(_themevar, theme);
}

// Apply the theme on page load
window.addEventListener("load", function () {
  var local_theme = getLocalTheme();
  var _theme = local_theme !== null ? local_theme : systemTheme;
  applyTheme(_theme);
});

// Listen for changes on the theme selector
themeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var local_theme = getLocalTheme();
  var theme = local_theme === "dark" ? "light" : "dark";
  applyTheme(theme);
});
