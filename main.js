// ! ========= MEdio raro este

/*
class DatosUserFormulario {
  constructor(nombre, apellido, email, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.pais = pais;
  }

  seleccionaPais() {
    if (pais == "Argentina")
      alert(
        "Gracias por tu interes en nuestros productos" +
          this.nombre +
          this.apellido +
          " tenemos excelentes ofertas para ti, te enviaremos la informacion al " +
          this.email
      );
    else {
      alert(
        "No hacemos envios a su pais de origen" + this.nombre + this.apellido
      );
    }
  }
}

function agregarInfoUsuario() {
  usuarioNuevo.nombre = prompt("Ingresa tu nombre");
  usuarioNuevo.apellido = prompt("Ingresa tu apellido");
  prompt("Ingresa tu mail para recibir informacion");
  usuarioNuevo.email;
  usuarioNuevo.pais = prompt("Ingresa tu pais");
}

const usuarioNuevo = new DatosUserFormulario({
  nombre: "",
  apellido: "",
  cursoDeInteres: "",
  email: "",
  pais: "",
});
agregarInfoUsuario();
seleccionaPais();

// ! ============ INGRESO DE USUARIO A LA PLATAFORMA Y REGISTRO

let nombreUsuario = prompt("Cual es tu nombre?");
let apellidoUsuario = prompt("Cual es tu apellido?");
registrarUsuario();

function registrarUsuario() {
  while ((nombreUsuario = "") || (apellidoUsuario = "")) {
    alert(
      "Faltaron datos, por favor verifica que has ingresado la informacion requerida"
    );
    nombreUsuario = propt("Cual es tu nombre?");
    apellidoUsuario = propt("Cual es tu apellido?");
  }
  alert(`Bienvenido ${nombreUsuario} ${apellidoUsuario} a nuestro sitio web`);
}

// CATALOGO DE COMPRAS

class Catalogo {
  constructor(categoria, stock, precio) {
    this.categoria = categoria;
    this.stock = stock;
    this.precio = precio;
  }

  descripcion() {
    alert(
      `tenenos ${this.stock} ${this.categoria} en stock, a un precio accesible de ${this.precio} pesos c/u`
    );
  }

  preguntaVendedor() {
    let respuesta = parseInt(prompt("Cuanta cantidad desea conprar?"));

    while (respuesta == 0 || respuesta > this.stock) {
      alert("Cantidad invalida o supera el nonto en stock disponible");
      respuesta = parseInt(prompt("Cuanta cantidad desea conprar??"));
    }

    let precioFinal = respuesta * this.precio;
    alert(
      `Excelente, el monto total a pagar quedaria en ${precialinal} pesos!, muchas gracas por su compra`
    );
  }
}

const instrumentos = new Catalogo("guitarras", 3, 5000);
const equipos = new Catalogo("amplificadores", 5, 2000);
const accesorios = new Catalogo("Cuerdas", 10, 200);
const indumentaria = new Catalogo("remeras", 30, 500);
console.log(instrumentos);
console.log(equipos);
console.log(accesorios);
console.log(indumentaria);

// SELECCION DE COMPRA DE CATALOGO
let usuarioCompra = prompt(
  "Quieres comprar guitarras, amplificadores o cuerdas? Tambien tenemos remeras"
);

switch (usuarioCompra) {
  case "guitarras":
    instrumentos.descripcion();
    instrumentos.preguntaVendedor();
    break;
  case "amplificadores":
    equipos.descripcion();
    equipos.preguntaVendedor();
    break;
  case "cuerdas":
    accesorios.descripcion();
    accesorios.preguntaVendedor();
    break;
  case "indumentaria":
    indumentaria.descripcion();
    indumentaria.preguntaVendedor();
    break;
  default:
    alert("Lo siento, no contamos con stock");
    break;
}

// ! ========== SIMULADOR DE CUOTAS

let comercio = prompt("Cual es el nombre del comercio?");
let monto = parseInt(prompt("Cual es el monto a financiar?"));
let cuotas = parseInt(prompt("Cantidad de cuotas"));
let resultado = 0;

switch (cuotas) {
  case 4:
    resultado = monto * 0.425 + 180;
    alert(
      `hola ${comercio} vas apoder financiar los ${monto} en ${cuotas} de ${resultado} cualquier duda o consulta comunicate al 0800-----`
    );
    break;
  case 6:
    resultado = monto * 0.32 + 180;
    alert(
      `hola ${comercio} vas apoder financiar los $(monto} en ${cuotas} de ${resultado} cualquier duda o consulta comunicate al 0800-----`
    );
    break;
  case 9:
    resultado = monto * 0.255 + 180;
    alert(
      `hola ${comercio} vas apoder financiar los $(monto} en ${cuotas} de ${resultado} cualquier duda o consulta comunicate al 0800-----`
    );
    break;
  case 12:
    resultado = monto * 0.225 + 180;
    alert(
      `hola ${comercio} vas apoder financiar los $(monto} en ${cuotas} de ${resultado} cualquier duda o consulta comunicate al 0800-----`
    );
    break;
  default:
    alert("No es una opcion valida");
    break;
}

// ! ======= DESCUENTOS

let precioFinal = 0;
function tipoDescuento() {
  let metodoPago = prompt(
    "Le calcularemos su dėscuento segun su metodo de pago. Ingrese aqui"
  );

  if (metodoPago == "efectivo") {
    console.log("Tu descuento sera del 15%");
  } else if (metodoPago == "transferencia") {
    console.log("Tu descuento sera del 10%!");
  } else if (metodoPago == "tarjeta de credito") {
    console.log("Puede pagar hasta 6 cuotas!");
  } else {
    console.log("No trabajamos ese metodo de pago! Lo sentimos.");
  }
}
tipoDescuento();

*/

// ! ======== SIMULADOR MIO

/*
class Catalogo {
    constructor(categoria, stock, precio) {
      this.categoria = categoria;
      this.stock = stock;
      this.precio = precio;
    }
  
    descripcion() {
      alert(
        `tenenos ${this.stock} ${this.categoria} en stock, a un precio accesible de ${this.precio} pesos c/u`
      );
    }
  
    preguntaVendedor() {
      let respuesta = parseInt(prompt("Cuanta cantidad desea conprar?"));
  
      while (respuesta == 0 || respuesta > this.stock) {
        alert("Cantidad invalida o supera el nonto en stock disponible");
        respuesta = parseInt(prompt("Cuanta cantidad desea conprar??"));
      }
  
      let precioFinal = respuesta * this.precio;
      alert(
        "Excelente, el monto tetal a pagar quedaria en S(precialinal) pesos!, muchas gracas por su compra"
      );
    }
  }

const instrumentos = new Catalogo("guitarras", 3, 5000);
const equipos = new Catalogo("amplificadores", 5, 2000);
const accesorios = new Catalogo("Cuerdas", 10, 200);
const indumentaria = new Catalogo("remeras", 30, 500);
console.log(instrumentos);
console.log(equipos);
console.log(accesorios);
console.log(indumentaria);


// SELECCION DE COMPRA DE CATALOGO
let usuarioCompra = prompt(
  "Quieres comprar guitarras, amplificadores o cuerdas? Tambien tenemos remeras"
);

switch (usuarioCompra) {
  case "guitarras":
    instrumentos.descripcion();
    instrumentos.preguntaVendedor();
    break;
  case "amplificadores":
    equipos.descripcion();
    equipos.preguntaVendedor();
    break;
  case "cuerdas":
    accesorios.descripcion();
    accesorios.preguntaVendedor();
    break;
  case "indumentaria":
    indumentaria.descripcion();
    indumentaria.preguntaVendedor();
    break;
  default:
    alert("Lo siento, no contamos con stock");
    break;
}
*/

let inicio = confirm(
  "Bienvenido a nuestra tienda, deseas realizar alguna compra?"
);

while (inicio == false) {
  alert("Muchas gracias, vuelva prontos");
  break;
}

class Cursos {
  constructor(capacitacion, precio, vacantes) {
    this.capacitacion = capacitacion;
    this.precio = precio;
    this.vacantes = vacantes;
  }

  descripcion() {
    alert(
      `Tenemos ${this.vacantes} vacantes disponibles para ${this.capacitacion}.\nEl precio por unidad es de ${this.precio}.\nLa cantidad de cursos esta ligada a la cantidad de vacantes disponibles\nDependiendo el metodo de pago se aplicaran descuentos`
    );
  }

  preguntaVendedor() {
    let respuesta = parseInt(
      prompt(
        "Cuantos cursos desea comprar? Recuerda que la cantidad de cursos esta ligada a la cantidad de vacantes disponibles",
        1
      )
    );

    while (
      respuesta == 0 ||
      respuesta > this.vacantes ||
      respuesta == isNaN(respuesta) // TODO ====> Corregir esta parte
    ) {
      alert("no contamos con esa cantidad de vacantes disponibles.");
      respuesta = parseInt(prompt("Cuantos cursos desea comprar? "));
    }

    let subtotal = respuesta * this.precio;
    alert(
      `El subtotal a pagar es $ ${subtotal}.`
    );
  }
}

const eft = new Cursos("eft", 3500, 7);
const biodescodificacion = new Cursos("biodescodificacion", 4000, 8);
const pendulo = new Cursos("pendulo", 3700, 5);
const biotrading = new Cursos("biotrading", 5000, 12);



// SWITCH para presentar posibles elecciones del comprador

let comprador = prompt(
  "Que curso deseas comprar? \neft\nbiodescodificacion\npendulo\nbiotrading"
);

switch (comprador) {
  case "eft":
    eft.descripcion();
    eft.preguntaVendedor();
    break;
  case "biodescodificacion":
    biodescodificacion.descripcion();
    biodescodificacion.preguntaVendedor();
    break;
  case "pendulo":
    pendulo.descripcion();
    pendulo.preguntaVendedor();
    break;
  case "biotrading":
    biotrading.descripcion();
    biotrading.preguntaVendedor();
    break;
  default:
    alert("Desafortunadamente no contamos con vacantes disponibles");
    break;  //! COMO HAGO PARA QUE ME VUELTA A PREGUNTAR EN CASO DE QUE NO HAYA VACANTES O FALSO NEGATIVO
}

// SWITCH PARA CUOTAS

/*

let metodoPago = prompt("Escriba el metodo de pago que desea utilizar.\nEfectivo\nTransferencia\nTarjeta de credito");

switch(metodoPago) {
    case "efectivo":
        alert("Se aplicará un descuento del 20%");
        
        break;
    case "transferencia":
        alert("Se aplicará un descuento del 15%");
        break;
    case "tarjeta de credito":
        alert("Se aplicará un descuento del 10%");
        break;
    default:
        alert("Desafortunademente no contamos con ese metodo de pago.") //! COMO HAGO PARA QUE ME VUELTA A PREGUNTAR EN CASO DE NEGATIVO
}

*/


//! Me falta agregar el precio final con descuentos aplicados.

