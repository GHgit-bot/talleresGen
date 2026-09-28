//sistema de pedidos

const usuario ={
    nombre: "Gabriela Hernández",
    ciudad: "Bogotá",
    rappiPrime: false,
    pedido: ["Hamburguesa", "Papas", "Gaseosa"],
    estado: "En preparación",
};

const ficha = {
    nombre: usuario.nombre,
    ciudad: usuario.ciudad,
    pedido: usuario.pedido,
    estado: usuario.estado,
};


const propina = 0.1; //10% de propina
let valor = {
    subtotal: 50000,
    domicilio: 12000,
};
valor.total = valor.subtotal + valor.domicilio *(1 + propina); //Calcula el total del pedido con domicilio y propina






console.log( `Hola, ${usuario.nombre} tu pedido a domicilio en ${usuario.ciudad}` ); //Saludo al usuario con su nombre y ciudad
console.log(`Tu pedido es: ${usuario.pedido[0]}, ${usuario.pedido[1]} y ${usuario.pedido[2]}`);//Muestra el pedido del usuario
console.log(`Tu primer producto es: ${usuario.pedido[0]}`);//Muestra el primer producto del pedido
usuario.pedido.push("Postre");//Agrega un producto al pedido
console.log(`Tu pedido se ha actualizado: ${usuario.pedido.join(", ")} `);//Muestra el pedido actualizado del usuario
usuario.pedido.pop();//Elimina el último producto del pedido
console.log(`Tu pedido se ha actualizado: ${usuario.pedido.join(", ")} `);//Muestra el pedido actualizado del usuario
console.log(`El número de productos en tu pedido es: ${usuario.pedido.length}`);//Muestra el número de productos en el pedido
console.log(`\n`);//Imprime una línea en blanco

console.log(`Resumen de tu pedido: ${ficha.nombre} de ${ficha.ciudad} ha pedido ${ficha.pedido.length} productos: ${ficha.pedido.join(", ")}: tu pedido se encuentra ${ficha.estado}`);
console.log(`Nombre cliente: ${ficha.nombre}`);//Acceder a cliente desde ficha
ficha.estado = "En camino"; //Actualiza el estado del pedido
console.log(`Tu pedido ha sido actualizado: ${ficha.nombre} de ${ficha.ciudad} ha pedido ${ficha.pedido.length} productos: ${ficha.pedido.join(", ")}: tu pedido se encuentra ${ficha.estado}`);//Muestra el pedido actualizado del usuario
console.log(`\n`);//Imprime una línea en blanco
console.log(`Primer producto de tu pedido: ${ficha.pedido[0]}`);//Acceder al primer producto del pedido desde ficha
console.log(`\n`);//Imprime una línea en blanco
console.log(`Total:\n Subtotal= ${valor.subtotal} \n Domicilio = ${valor.domicilio} \n Propina = ${propina} \n Total = ${valor.total}`);//Muestra el total del pedido
console.log(`RECIBO DE PAGO: \n Total a pagar por tu pedido ${ficha.nombre} es: $${valor.total}`);//Muestra el recibo de pago




/*Pregúntate:
• ¿Por qué la propina la guardaste como const y no como let?
    Porque la propina es un valor fijo que no va a cambiar, por lo tanto se puede declarar como const.
• ¿Qué tipo de dato tenía el subtotal cuando dio mal el resultado, y qué tipo necesitabas?
    El subtotal era un string, y necesitaba que fuera un number para poder hacer la operación matemática.
*/