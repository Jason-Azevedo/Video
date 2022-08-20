export default function truncateText(input: string, length: number) {
  if (!(input.length > length)) return input;

  // Prevent ellipsis after space between words
  if (input[length - 1] === " ") return input.substring(0, length - 1) + "...";

  return input.substring(0, length) + "...";
}
