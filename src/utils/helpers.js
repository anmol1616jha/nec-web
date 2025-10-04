export const isStringEmpty = (data) => {
    if (
        !data ||
        typeof data !== 'string' ||
        data.trim().length === 0 ||
        data === null ||
        data === undefined ||
        data === ''
    ) {
        console.log('string empty');

        return true;
    }

    return false;
}

export const getInitials = (name) => {
    if (isStringEmpty(name)) {
        return '-/-';
    }
    const words = name
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        return '-/-';
    }

    if (words.length === 1) {
        return words[0][0].toUpperCase();
    } else {
        const firstInitial = words[0][0].toUpperCase();
        const lastInitial = words[words.length - 1][0].toUpperCase();
        return firstInitial + lastInitial;
    }
}

export const getRandomBetween = (minNumber = 0, maxNumber = 9) => {
  // Check if inputs are valid integers and max > min
  if (!Number.isInteger(minNumber) || !Number.isInteger(maxNumber) || maxNumber <= minNumber) {
    return 0;
  }

  // Generate random integer between minNumber and maxNumber (inclusive)
  const random = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  return random;
}
