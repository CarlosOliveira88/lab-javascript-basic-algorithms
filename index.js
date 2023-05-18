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

function ordenLexicografico() {
  let hacker1 = document.getElementById("driver").value;
  let hacker2 = document.getElementById("navigator").value;
  let result = hacker1.localeCompare(hacker2);

  /*O método localeComparecompara as strings lexicograficamente 
  y retorna um número negativo se hacker1 deve ser clasificado antes de hacker2,
   um número positivo se hacker2deve ser clasificado antes de hacker1, 
   ou zero se os nomes forem iguais.*/

  if (result < 0) {
    document.getElementById("driverName").innerHTML =
      "The driver's name goes first.";
    document.getElementById("navigatorName").innerHTML = hacker1;
  } else if (result > 0) {
    document.getElementById("driverName").innerHTML =
      "Yo, the navigator goes first, definitely.";
    document.getElementById("navigatorName").innerHTML = hacker2;
  } else {
    document.getElementById("driverName").innerHTML =
      "What?! You both have the same name?";
    document.getElementById("navigatorName").innerHTML =
      hacker1 + " & " + hacker2;
  }

  // eu tentei assim mas nao funcionou
  // if (hacker1 > hacker2) {
  //   document.getElementById("driverName").innerHTML =
  //     "The driver's name goes first.";
  // } else if (hacker1 < hacker2) {
  //   document.getElementById("driverName").innerHTML =
  //     "Yo, the navigator goes first, definitely.";
  // } else {
  //   document.getElementById("driverName").innerHTML =
  //     "What?! You both have the same name?";
  // }
}
