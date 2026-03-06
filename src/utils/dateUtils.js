// ============================================================
//  UTILITY FUNCTIONS
//  Date formatting, number formatting, and date arithmetic
// ============================================================

// Step 1) Format a number with locale grouping and decimal places
function formatNum(n, dec) {
  if (dec === undefined) dec = 0;
  if (n === null || n === undefined || isNaN(n)) return "\u2014";
  return Number(n).toLocaleString("en-AU", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  });
}

// Step 2) Format a date string to "DD Mon" display format
function formatDate(d) {
  if (!d) return "\u2014";
  var dt = new Date(d);
  return dt.toLocaleDateString("en-AU", { day: "2-digit", month: "short" });
}

// Step 3) Calculate days between two date strings
function daysBetween(a, b) {
  return Math.ceil((new Date(b) - new Date(a)) / 86400000);
}

// Step 4) Add days to a date and return new Date
function addDays(d, n) {
  var r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

// Step 5) Return ISO date string (YYYY-MM-DD) from Date object
function isoDate(d) {
  return d.toISOString().split("T")[0];
}

// Step 6) Get ISO week number for a date
function getWeekNumber(d) {
  var date = new Date(d);
  var jan1 = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - jan1) / 86400000 + jan1.getDay() + 1) / 7);
}

// Step 7) Check if date falls on a weekend
function isWeekend(d) {
  var day = new Date(d).getDay();
  return day === 0 || day === 6;
}

// Step 8) Check if date is today
function isToday(d) {
  var today = new Date();
  var dt = new Date(d);
  return dt.toDateString() === today.toDateString();
}

// Step 9) Parse date string to ISO (YYYY-MM-DD) based on locale
// locale: "australia" | "ddmmyyyy" = DD/MM/YYYY; "us" | "mmddyyyy" = MM/DD/YYYY; "iso" = YYYY-MM-DD pass-through
function parseDateFromStr(str, locale) {
  if (!str || typeof str !== "string") return "";
  str = str.trim();
  if (str.length === 0) return "";
  var loc = (locale || "australia").toLowerCase();
  var parts = str.split(/[\/\-\.]/);
  if (parts.length !== 3) return str;
  var p0 = parseInt(parts[0], 10);
  var p1 = parseInt(parts[1], 10);
  var p2 = parseInt(parts[2], 10);
  if (isNaN(p0) || isNaN(p1) || isNaN(p2)) return str;
  var day, month, year;
  if (loc === "iso" || (parts[0].length >= 4 && p0 > 31)) {
    year = p0;
    month = p1;
    day = p2;
  } else if (loc === "us" || loc === "mmddyyyy") {
    month = p0;
    day = p1;
    year = p2;
  } else {
    day = p0;
    month = p1;
    year = p2;
  }
  if (year < 100) year += 2000;
  var d = new Date(year, month - 1, day);
  if (isNaN(d.getTime())) return str;
  var m = ("0" + (d.getMonth() + 1)).slice(-2);
  var dd = ("0" + d.getDate()).slice(-2);
  return d.getFullYear() + "-" + m + "-" + dd;
}

export {
  formatNum,
  formatDate,
  daysBetween,
  addDays,
  isoDate,
  getWeekNumber,
  isWeekend,
  isToday,
  parseDateFromStr
};
