console.log('We\'re here!');

const names = [
  'Jose',
  'Sonia Meller',
  'Munique',
  'Gui',
  'Alvaro',
  'Ângela',
  'Gonçalo',
  'Criminal Carmen Ortega',
];

function confirmEmail (email) {
  // return typeof email === 'string' && email.length >= 5;
  return typeof email === 'string' && email.length >= 5 && email.length < 100;
}