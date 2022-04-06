

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

