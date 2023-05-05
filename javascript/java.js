let usuario = prompt('Ingresa tu nombre de usuario:');
let contraseña = prompt('Ingresa tu contraseña:');


if (usuario != '' && contraseña != '') {
  alert('Inicio de sesión exitoso.');

  
  const carrito = [];

  const productos = {
      'samsung galaxy a04': 58000,
      'heladera philco': 240000,
      'smart tv tcl': 76000,
      'microondas BGH': 55000,
      'cocina atma': 410000,
    };


  while (true) {
    const prodSeleccionado = prompt(
      'Productos disponibles:\n\n' +
        Object.keys(productos).join('\n') +
        '\n\nIngresa el nombre del producto que deseas comprar o presiona Cancelar para finalizar tu compra:'
    );
    if (prodSeleccionado === null) {
      break;
    } else if (productos[prodSeleccionado]) {
      carrito.push(prodSeleccionado);
      console.log(`${prodSeleccionado} agregado al carrito de compras.`);
    } else {
      alert('Producto no disponible. Por favor ingresa un nombre de producto valido.');
    }
  }

  let total = 0;
  console.log('Carrito de compras:');
  for (const item of carrito) {
    console.log(`- ${item} - $${productos[item]}`);
    total += productos[item];
  }
  console.log(`Total: $${total}`);
  while (carrito.length > 0) {
    const removeItem = prompt(
      `Ingresa el numero correspondiente para eliminar un producto del carrito:\n\n${
        carrito.map((item, index) => `${index + 1}. ${item} - $${productos[item]}`).join('\n')
      }\n\nPresiona Cancelar para finalizar tu compra.`
    );
    if (removeItem === null) {
      break;
    } else if (removeItem >= 1 && removeItem <= carrito.length) {
      const removed = carrito.splice(removeItem - 1, 1)[0];
      console.log(`${removed} eliminado del carrito de compras.`);
      total -= productos[removed];
    } else {
      alert('Por favor ingresa un numero correspondiente al producto que deseas eliminar.');
    }
    console.log('Carrito de compras:');
    for (const item of carrito) {
      console.log(`- ${item} - $${productos[item]}`);
    }
    console.log(`Total: $${total}`);
  }

  alert(`Compra realizada. Total: $${total}`);
} else {
  alert('Usuario o contraseña incorrectos. vuelva a itentarlo.');
}
