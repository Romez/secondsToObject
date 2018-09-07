export default seconds => {
  const perMinute = 60

  const iter = (seconds, acc) => {
    if (seconds < 1) {
      return acc
    }

    if (seconds - 60 < 0) {
      acc = {...acc, seconds: seconds % 60}
      return acc
    }

    acc = {...acc, minutes: acc.minutes += 1}

    if (acc.minutes > 59) {
      acc = {...acc, minutes: 0, hours: acc.hours += 1}
    }

    if (acc.hours > 23) {
      acc = {...acc, hours: 0, days: acc.days+1}
    }

    return iter(seconds - 60, acc)
  }

  return iter(seconds, {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  })
}