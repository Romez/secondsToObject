const convert = (seconds) => {
  const result = {
    seconds,
    minutes: 0,
    hours: 0,
    days: 0,
  };

  while (result.seconds > 59) {
    result.seconds -= 60;
    result.minutes += 1;
  }

  while (result.minutes > 59) {
    result.minutes -= 60;
    result.hours += 1;
  }

  while (result.hours > 23) {
    result.hours -= 24;
    result.days += 1;
  }

  return result;
};

export default convert;
