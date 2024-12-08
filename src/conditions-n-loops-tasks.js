/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  return (a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a);
}

function convertToRomanNumerals(inputNum) {
  const romanNumerals = [
    { value: 10, symbol: 'X' },
    { value: 5, symbol: 'V' },
    { value: 1, symbol: 'I' },
  ];

  let result = '';
  let num = inputNum;

  for (let i = 0; i < romanNumerals.length; i += 1) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }

    if (i < romanNumerals.length - 1) {
      const nextValue = romanNumerals[i + 1].value;
      const nextSymbol = romanNumerals[i + 1].symbol;

      if (num >= romanNumerals[i].value - nextValue) {
        result += nextSymbol + romanNumerals[i].symbol;
        num -= romanNumerals[i].value - nextValue;
      }
    }
  }

  return result;
}

function convertNumberToString(numberStr) {
  const digits = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };

  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    if (digits[char]) {
      result += (result ? ' ' : '') + digits[char];
    }
  }

  return result;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

function isContainNumber(inputNum, digit) {
  let num = inputNum;
  while (num > 0) {
    if (num % 10 === digit) return true;
    num = Math.floor(num / 10);
  }
  return false;
}

function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) return i;
  }

  return -1;
}

function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size).fill(0);
  }

  let num = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        matrix[bottom][i] = num;
        num += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        matrix[i][left] = num;
        num += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

function rotateMatrix(inputMatrix) {
  const matrix = inputMatrix.map((row) => [...row]);
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n / 2; j += 1) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
}

function sortByAsc(inputArr) {
  const arr = [...inputArr];
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function getNearestBigger(number) {
  let digits = Array.from(String(number), Number);
  let i = digits.length - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) i -= 1;
  if (i === -1) return number;

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) j -= 1;

  [digits[i], digits[j]] = [digits[j], digits[i]];
  digits = [
    ...digits.slice(0, i + 1),
    ...digits.slice(i + 1).sort((a, b) => a - b),
  ];

  return Number(digits.join(''));
}

function shuffleChar(str, iterations) {
  // Helper function to perform a single shuffle
  function shuffleOnce(s) {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < s.length; i += 1) {
      if (i % 2 === 0) {
        evenChars += s[i];
      } else {
        oddChars += s[i];
      }
    }

    return evenChars + oddChars;
  }

  // Optimizing iterations based on the length of the string
  const n = str.length;
  let cycleCount = 0;
  let result = str;

  // A set to track seen configurations to detect cycles
  const seen = new Set();

  // Use a local variable for remaining iterations
  let remainingIterations = iterations;

  while (remainingIterations > 0) {
    if (seen.has(result)) {
      // If we've seen this configuration before, we're in a cycle
      break;
    }

    seen.add(result);
    result = shuffleOnce(result);
    cycleCount += 1;

    // If cycleCount has exceeded the string length, we can take mod to reduce iterations
    if (cycleCount >= n) {
      remainingIterations %= cycleCount; // Update the remaining iterations
      cycleCount = 0; // Reset cycle count after reducing iterations
    }

    remainingIterations -= 1; // Decrease the remaining iterations
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
