/**
 * Menghasilkan check digit Luhn untuk 6 digit,
 * sehingga total menjadi 7 digit.
 */

function generateLuhn7(data) {
  if (!/^\d{6}$/.test(data)) {
    throw new Error("Input harus tepat 6 digit.");
  }

  let sum = 0;
  let shouldDouble = true; // karena check digit akan berada di paling kanan

  for (let i = data.length - 1; i >= 0; i--) {
    let digit = Number(data[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return data + checkDigit;
}

// Contoh
let nomer = Math.floor(Math.random() * 900000) + 100000
console.log(generateLuhn7(nomer.toString()));