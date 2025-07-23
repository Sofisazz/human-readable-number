module.exports = function toReadable(number) {
  const count = Array.from(String(number)).length;
  // number = Number(number);
  let str = '';
  const one = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const two = [
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const three = [
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hund = 'hundred';

  switch (count) {
    case 1:
      if (number === 0) return 'zero';
      str = one[number - 1];
      break;
    case 2:
      if (number % 10 === 0) {
        str = three[number / 10 - 1];
      } else if (number < 20) {
        str = two[(number % 10) - 1];
      } else {
        const ost = number % 10;
        const floor = Math.floor(number / 10);
        str = `${three[floor - 1]} ${one[ost - 1]}`;
      }
      break;
    case 3:
      if (number % 100 === 0) {
        str = `${one[number / 100 - 1]} ${hund}`;
      } else if ((number % 100) % 10 === 0) {
        const ost = number % 100;
        str = `${one[Math.floor(number / 100) - 1]} ${hund} ${three[ost / 10 - 1]}`;
      } else if (number % 100 < 10) {
        str = `${one[Math.floor(number / 100) - 1]} ${hund} ${one[(number % 100) - 1]}`;
      } else if (number % 100 < 20) {
        const ost = number % 100;
        const second = ost % 10;
        str = `${one[Math.floor(number / 100) - 1]} ${hund} ${two[second - 1]}`;
      } else {
        const ost = number % 100;
        const second = Math.floor(ost / 10);
        const third = ost % 10;
        str = `${one[Math.floor(number / 100) - 1]} ${hund} ${three[second - 1]} ${one[third - 1]}`;
      }
      break;
    default:
      break;
  }
  return str;
};
