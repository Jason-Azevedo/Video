export function toHMS(timeInSeconds: number): string {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor((timeInSeconds % 3600) % 60);

  const hourText = hours ? hours + ":" : "";
  const minutesText = (minutes < 10 ? "0" + minutes : minutes) + ":";
  const secondsText = seconds < 10 ? "0" + seconds : seconds;

  return hourText + minutesText + secondsText;
}
