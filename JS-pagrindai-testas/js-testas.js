/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

// 1euro = 1.04 USD

function convertEurToUsd() {
  let usdSum = eurSum * 1.04;
  console.log(`${usdSum.toFixed(2)} USD`);
}

let eurSum = Math.floor(Math.random() * 1000) + 1;
convertEurToUsd();
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
// 1 USD = 0.96 EUR
function convertUsdToEuros() {
  let eurosSum = usdolarSum * 0.96;
  console.log(`${eurosSum.toFixed(2)} Eur`);
}
let usdolarSum = Math.floor(Math.random() * 1000) + 1;
convertUsdToEuros();

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function calculateBMI(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi > 25) {
    console.log(`Jus turite Viršsvori , Jusu BMI yra : ${bmi.toFixed(2)}`);
  } else if ((18, 5 < bmi && bmi <= 25)) {
    console.log(`Jusu svoris normalus , Jusu BMI yra :  ${bmi.toFixed(2)}`);
  } else if ((bmi < 18, 5)) {
    console.log(`Jusu svoris yra per mažas , Jusu BMI yra : ${bmi.toFixed(2)}`);
  }
}
calculateBMI(70, 1.7);
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
const secondsInYear = 31536000;
const minutesInYear = 525600;
const hoursInYear = 8760;
const daysInYear = 365;
function calculateTime(age) {
  let seconds = age * secondsInYear;
  let minutes = age * minutesInYear;
  let hours = age * hoursInYear;
  let days = age * daysInYear;
  console.log(`Jusu amzius sekundemis yra : ${seconds} Sekundes`);
  console.log(`Jusu amzius minutemis yra : ${minutes} minutes`);
  console.log(`Jusu amzius valandomis yra : ${hours} valandos`);
  console.log(`Jusu amzius dienomis yra : ${hours} Dienos`);
}
calculateTime(23);
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
function convertTemperature(temperature, scale) {
  if (scale.toUpperCase() === 'F') {
    let celsius = ((temperature - 32) * 5) / 9;
    console.log(
      `${temperature} Fareinheitais yra = ${celsius.toFixed(2)} celsijais`
    );
  } else if (scale.toUpperCase() === 'C') {
    let fahrenheit = (temperature * 9) / 5 + 32;
    console.log(
      `${temperature} Celsijais yra = ${fahrenheit.toFixed(2)} fareinheitais`
    );
  }
}
convertTemperature(100, 'F');
convertTemperature(0, 'c');
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
function printNumbers() {
  let numbers = '';
  for (let i = 1; i <= 10; i++) {
    numbers += i;
    if (i < 10) {
      numbers += '-';
    }
  }
  console.log(numbers);
}
printNumbers();
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

function printStars(lines) {
  for (let i = 1; i <= lines; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}
printStars(5);
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

function daysUntilChristmas() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmasDate = new Date(currentYear, 11, 25);

  if (today > christmasDate) {
    christmasDate.setFullYear(currentYear + 1);
  }
  const differenceInTime = christmasDate - today;

  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  return differenceInDays;
}
console.log(`Dienos iki kaledu : ${daysUntilChristmas()}`);
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
const names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];
function joinNames(names, separator) {
  let joinedNames = '';
  for (let i = 0; i < names.length; i++) {
    joinedNames += names[i];
    if (i < names.length - 1) {
      joinedNames += separator;
    }
  }
  console.log(joinedNames);
}
joinNames(names, ',');
joinNames(names, '+');
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

function generateSecurePassword() {
  const characters = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  };

  const passwordArray = [
    characters.upper[Math.floor(Math.random() * characters.upper.length)],
    characters.lower[Math.floor(Math.random() * characters.lower.length)],
    characters.numbers[Math.floor(Math.random() * characters.numbers.length)],
    characters.special[Math.floor(Math.random() * characters.special.length)],
  ];

  const allSymbols =
    characters.upper +
    characters.lower +
    characters.numbers +
    characters.special;
  for (let i = passwordArray.length; i < 12; i++) {
    passwordArray.push(
      allSymbols[Math.floor(Math.random() * allSymbols.length)]
    );
  }

  return passwordArray.sort(() => Math.random() - 0.5).join('');
}

const password = generateSecurePassword();
console.log(`Jusu slaptazodis : ${password}`);
