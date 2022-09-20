const dayjs = require('dayjs')

var isoWeeksInYear = require('dayjs/plugin/isoWeeksInYear')
var isLeapYear = require('dayjs/plugin/isLeapYear') // dependent on isLeapYear plugin

var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

const today = dayjs();
const day = dayjs().day();
const week = dayjs().week();
const total_week = dayjs().isoWeeksInYear();
const percent = Math.floor(week / total_week * 100);
const clean_today = dayjs().format("dddd D MMM, YYYY");


var progress = "";
for (n = 0; n < 20; n++) {
    if (percent < (n + 1) * 5) {
        progress = progress + "░";
    }
    else {
        progress = progress + "▓";
    }
}
const week_progress = `2022 progress ` + progress.replace(/^/, "[") + `]${percent}% Week ${week} / ${total_week}`

exports.clean_today = clean_today
exports.today = today
exports.day = day
exports.week = week
exports.total_week = total_week
exports.percent = percent
exports.week_progress = week_progress