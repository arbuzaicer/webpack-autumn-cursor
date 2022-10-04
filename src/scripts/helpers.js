import { differenceInQuarters } from "date-fns";
import { isEmpty, isNil } from "ramda";

export function getDiffInDays(date1, date2) {
  return differenceInQuarters(date1, date2);
}

export function calculcateSomething(data) {}
