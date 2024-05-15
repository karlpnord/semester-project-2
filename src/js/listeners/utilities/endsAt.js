export function timeUntilDeadline(date) {
  const endDay = new Date(date);
  const now = new Date();

  var seconds = Math.floor((endDay - now) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  let string = `Ends in: ${days}d ${hours}h ${minutes}m`;

  if (days === 0) {
    string = `Ends in: ${hours}h ${minutes}m`;
  }

  if (hours === 0) {
    string = `Ends in: ${minutes}m`;
  }

  if (endDay - now < 0) {
    string = 'Listing expired';
  }

  return string;
}
