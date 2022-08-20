function convertDifferenceToUnits(
  difference: number,
  unit: number,
  unitName: string
) {
  const units = Math.round(difference / unit);
  if (units === 1) return `${units} ${unitName} ago`;

  return `${units} ${unitName}s ago`;
}

export default function getPostedAgo(postedTime: number) {
  const currentTime = new Date().getTime() / 1000;
  const timeDiff = currentTime - postedTime;

  console.log("time diff: " + timeDiff);

  // All these variables are in seconds
  const year = 31536000;
  const month = 2628288;
  const week = 604800;
  const day = 86400;
  const hour = 3600;
  const minute = 60;

  // Longer than a year ago
  if (timeDiff > year) return convertDifferenceToUnits(timeDiff, year, "year");

  // Longer than a month ago
  if (timeDiff > month)
    return convertDifferenceToUnits(timeDiff, month, "month");

  // Longer than a week ago
  if (timeDiff > week) return convertDifferenceToUnits(timeDiff, week, "week");

  // Longer than a day ago
  if (timeDiff > day) return convertDifferenceToUnits(timeDiff, day, "day");

  // Longer than a day ago
  if (timeDiff > hour) return convertDifferenceToUnits(timeDiff, hour, "hour");

  // Longer than a day ago
  if (timeDiff > minute)
    return convertDifferenceToUnits(timeDiff, minute, "minute");

  // Must be seconds ago at this point.
  return convertDifferenceToUnits(timeDiff, 1, "second");
}
