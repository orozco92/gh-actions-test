import { DateTime } from "luxon";
console.log("Hello from gh-actions-test");
const now = DateTime.now();
console.log(now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));
