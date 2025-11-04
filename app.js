// datos json
const productosJSON = [
  {
    id: 1,
    nombre: "Cafe MOla",
    precio: 70.00,
    descripcion: "Exquisito cafe con chocolate y crema",
    imagen: "te-verde.jpg"
  },
  {
    id: 2,
    nombre: "Te Verde",
    precio: 50.00,
    descripcion: "Hoja de te verde",
    imagen: "te-verde.jpg"
  },
  {
    id: 3,
    nombre: "Smoothie de Frutas",
    precio: 40.00,
    descripcion: "Mezcla de Frutas",
    imagen: "te-verde.jpg"
  }
  
]
// funcion principal
function mostrarProductos(){
  const contenedor = document.querySelector('#contenedor-productos')
  //recorrer
  productosJSON.forEach(productos => {
      //desde javascript se crearar un contenedor div
      const card = document.createElement('div')
      //asignar al contenedor una clase
      card.classList.add('productos-card')
      //construir la tarjera
      card.innerHTML =  `
        
         <img src=${productos.imagen}>
        <h2>${productos.nombre}</h2>
        <p>${productos.descripcion}</p>
        <button data-id="${productos.id}">Agregar al carrito</button>
      `
    //inserta el nuevo elemento a la tarjeta
      contenedor.appendChild(card);    
  })

}
// llamar a la funcion

mostrarProductos();
