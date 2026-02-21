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

export {
  formatNum,
  formatDate,
  daysBetween,
  addDays,
  isoDate,
  getWeekNumber,
  isWeekend,
  isToday
};
