
function tortugasNinja() {
  let tortuga = prompt("Ingresa el nombre de una Tortuga Ninja: Michelangelo, Leonardo Raphael o Donatello. Presiona ENTER para pasar.");

  if (tortuga.toLowerCase() === "leonardo") {
    alert("¡Leonardo lidera el camino!");
  } else if (tortuga.toLowerCase() === "donatello") {
    alert("¡Donatello hace máquinas increíbles!");
  } else if (tortuga.toLowerCase() === "raphael") {
    alert("¡Raphael es rudo pero justo!");
  } else if (tortuga.toLowerCase() === "michelangelo") {
    alert("¡Michelangelo siempre tiene hambre!");
  } else {
    console.log("Tortuga Ninja no válida...");
  }
}

for (let i = 0; i < 2; i++) {
  tortugasNinja();
}



