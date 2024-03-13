function daysOfAYear(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // Check if it is divisible by 100
    if (year % 100 === 0) {
      // Check if it is divisible by 400
      if (year % 400 === 0) {
        return 366; // Leap year
      } else {
        return 365; // Not a leap year
      }
    } else {
      return 366; // Leap year
    }
  } else {
    return 365; // Not a leap year
  }
}
