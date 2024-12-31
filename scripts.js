const productos = [
    {
      nombre: "Proyecto STEAM",
      descripcion: "Un enfoque dinámico para integrar ciencia, tecnología, ingeniería, arte y matemáticas.",
      imagen: "Imagenes/producto1.jpg",
      precio: 10950
    },
    {
      nombre: "Realidad Aumentada",
      descripcion: "Explora conceptos complejos con herramientas de realidad aumentada.",
      imagen: "Imagenes/producto2.jpg",
      precio: 21000
    },
    {
      nombre: "Gamificación",
      descripcion: "Convierte el aprendizaje en una experiencia divertida y motivadora.",
      imagen: "Imagenes/producto3.jpg",
      precio: 15000
    },
    {
      nombre: "Programación para niños",
      descripcion: "Introduce a los más pequeños en el mundo de la tecnología con actividades interactivas.",
      imagen: "Imagenes/producto4.jpg",
      precio: 20000
    }
  ];
  
  
  let productosHTML = "";
  for (let indice = 0; indice < productos.length; indice++) {
    
    productosHTML += `
    <div class="tarjeta">
                <img src= ${productos[indice].imagen}>
                <h3>${productos[indice].nombre}</h3>
                <p>${productos[indice].descripcion }</p>
                <p class="precio">$${productos[indice].precio}</p>
                <a href="#" class="boton">Agregar al carrito</a>
                
            </div>
    `;
  }
    
  const contenedorProductos = document.getElementById ("contenedorProductos");
  contenedorProductos.innerHTML = productosHTML;

  const botonesAgregar = document.querySelectorAll(".boton");

  const listaCarrito = document.querySelector ("#carrito ul");
  
  const totalCarrito = document.querySelector ("#carrito h3");

  const mensajePagarCarrito = document.getElementById ("mensaje")

  console.log (totalCarrito);

  let totalAPagar = 0; 

  for (let indice = 0; indice < botonesAgregar.length; indice++) {
    function agregarElementoCarrito() {
        event.preventDefault();
        const elementoLi = document.createElement("li");
        console.log(elementoLi);
        elementoLi.innerText = `Curso ${productos[indice].nombre} $${productos[indice].precio} `
        
        listaCarrito.appendChild(elementoLi);
        totalAPagar += productos[indice].precio;
        totalCarrito.innerText = "Total a pagar: $" + totalAPagar;
        mensajePagarCarrito.innerText = ""
    }
    botonesAgregar[indice].addEventListener("click", agregarElementoCarrito);
    

    } ;

    const botonBorrar = document.querySelector("#boton-borrar");
    

    function borrarCarrito(){
        listaCarrito.innerHTML = "";
        totalCarrito.innerHTML = "Total a pagar $0";
        totalAPagar = 0;
        mensajePagarCarrito.innerText = ""
    };
    
    botonBorrar.addEventListener("click", borrarCarrito);

    const botonPagar = document.querySelector("#boton-pagar");
    
    
    function irAPagar(){
        if(listaCarrito.innerHTML==="") {
            mensajePagarCarrito.innerText = "No has seleccionado ningún producto";
        } else {
        window.location.href = "Pagos.html" 
    } };
    botonPagar.addEventListener("click",irAPagar);