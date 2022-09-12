export function toHMS(timeInSeconds: number): string {
  const hours = Math.round(timeInSeconds / 3600);
  const minutes = Math.round((timeInSeconds % 3600) / 60);
  const seconds = Math.round((timeInSeconds % 3600) % 60);

  const hoursText = hours ? hours + ":" : "";
  const minutesText = minutes ? minutes + ":" : "0:";
  const secondsText = seconds ? (seconds < 10 ? `0${seconds}` : seconds) : "";

  return hoursText + minutesText + secondsText;
}
