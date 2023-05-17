// Iteration 1: Names and Input

function nombre() {
  let hacker1 = document.getElementById("driver").value;
  let hacker2 = document.getElementById("navigator").value;

  document.getElementById(
    "driverName"
  ).innerHTML = `The driver's name is ${hacker1}`;

  document.getElementById(
    "navigatorName"
  ).innerHTML = `The navigator's name is ${hacker2}`;
}

// Iteration 2: Conditionals
function longestName() {
  let hacker1 = document.getElementById("driver").value;
  let hacker2 = document.getElementById("navigator").value;

  let hacker1Conter = hacker1.length;
  let hacker2Conter = hacker2.length;

  if (hacker1.length > hacker2.length) {
    document.getElementById(
      "driverName"
    ).innerHTML = `The driver has the longest name, it has ${hacker1Conter} characters.`;

    document.getElementById("navigatorName").innerHTML = "";
  }

  if (hacker1.length < hacker2.length) {
    document.getElementById(
      "driverName"
    ).innerHTML = `It seems that the navigator has the longest name, it has ${hacker2Conter} characters.`;

    document.getElementById("navigatorName").innerHTML = "";
  }

  if (hacker1.length == hacker2.length) {
    document.getElementById(
      "driverName"
    ).innerHTML = `Wow, you both have equally long names, ${hacker1Conter} characters!`;

    document.getElementById("navigatorName").innerHTML = "";
  }
}

// Iteration 3: Loops

/*toUpperCase() é um método em JavaScript que é usado para converter uma string em letras maiúsculas.
 Ele retorna uma nova string que é a string original com todas as letras em maiúsculas.*/

function driveReverseName() {
  let hacker1 = document.getElementById("driver").value.toUpperCase();

  let nombreConEspacio = ` `;
  let nombreReverso = ` `;

  for (let i = 0; i < hacker1.length; i++) {
    nombreConEspacio += hacker1[i] + " ";
  }

  document.getElementById(
    "driverName"
  ).innerHTML = `${nombreConEspacio.trim()}`;

  for (let i = hacker1.length - 1; i >= 0; i--) {
    nombreReverso += hacker1[i] + " ";
  }

  document.getElementById("navigatorName").innerHTML = nombreReverso;
}

function navigatoReverseName() {
  let hacker2 = document.getElementById("navigator").value.toUpperCase();

  let nombreConEspacio = ` `;
  let nombreReverso = ` `;

  for (let i = 0; i < hacker2.length; i++) {
    nombreConEspacio += hacker2[i] + " ";
  }

  document.getElementById(
    "driverName"
  ).innerHTML = `${nombreConEspacio.trim()}`;

  for (let i = hacker2.length - 1; i >= 0; i--) {
    nombreReverso += hacker2[i] + " ";
  }

  document.getElementById("navigatorName").innerHTML = nombreReverso;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sum = numbers.reduce(
  (valorAcumulado, valorAtual) => valorAcumulado + valorAtual
);
console.log(sum);
