'use strict'

const d = document;

const banners = [
    {
        htmlid: 'moda',
        imagen: "img/banner-1.webp"
    },
    {
        htmlid: 'running',
        imagen: "img/banner-2.jpg"
    },
    {
        htmlid: 'futbol',
        imagen: "img/banner-3.jpg"
    }
]

const productos = [
    {
        id: 1,
        nombre: "Nike Air Force 1 Mid'07 LX",
        descripcion: 'Zapatillas de Moda para Hombre',
        precio: '$100',
        imagen: "img/Nike-AirForce1 Mid'07LX.jpg",
        imagen2: "img/Nike-AirForce1Mid'07LX-2.jpg",
        categoría: 'Zapatillas de moda',
        htmlid: 'moda'
    },
    {
        id: 4,
        nombre: 'Nike Air Zoom Pegasus 38',
        descripcion: 'Zapatillas de Running para Hombre',
        precio: '$120',
        imagen: 'img/Nike-AirZoomPegasus38.jpg',
        imagen2: 'img/Nike-AirZoomPegasus38-2.jpg',
        categoría: 'Running',
        htmlid: 'running'
    },
    {
        id: 5,
        nombre: 'Nike Air Zoom Pegasus 40',
        descripcion: 'Zapatillas de Running para Hombre',
        precio: '$80',
        imagen: 'img/Nike-Pegasus40.jpg',
        imagen2: 'img/Nike-Pegasus40-2.jpg',
        categoría: 'Running',
        htmlid: 'running'
    },
    {
        id: 2,
        nombre: 'Nike Air Force 1 LV8 2',
        descripcion: 'Zapatillas de Moda para Hombre',
        precio: '$150',
        imagen: 'img/Nike-AirForce1LV8-2.jpg',
        imagen2: 'img/Nike-AirForce1LV8.jpg',
        categoría: 'Zapatillas de moda',
        htmlid: 'moda'
    },
    {
        id: 6,
        nombre: 'Nike Revolution 6 NN JP',
        descripcion: 'Zapatillas de Running para Hombre',
        precio: '$110',
        imagen: 'img/NikeRevolution6-NNJP.jpg',
        imagen2: 'img/NikeRevolution6-NNJP-2.jpg',
        categoría: 'Running',
        htmlid: 'running'
    },
    {
        id: 7,
        nombre: 'Nike Phantom GX Pro FG',
        descripcion: 'Botines de Pasto Natural Unisex',
        precio: '$140',
        imagen: 'img/Nike-PhantomGXProFG.jpg',
        imagen2: 'img/Nike-PhantomGXProFG-2.jpg',
        categoría: 'Fútbol',
        htmlid: 'futbol'
    },
    {
        id: 3,
        nombre: 'Nike Air Force 1 07 LV8',
        descripcion: 'Zapatillas de Moda para Hombre',
        precio: '$130',
        imagen: 'img/Nike-AirForce1-07-LV8.jpg',
        imagen2: "img/Nike-AirForce1-07-LV8-2.jpg",
        categoría: 'Zapatillas de moda',
        htmlid: 'moda'
    },
    {
        id: 8,
        nombre: 'Nike Zoom Mercurial',
        descripcion: 'Botines de Pasto Natural Unisex',
        precio: '$160',
        imagen: 'img/Nike-Zoom MercurialSuperfly.jpg',
        imagen2: 'img/Nike-Zoom MercurialSuperfly-2.jpg',
        categoría: 'Fútbol',
        htmlid: 'futbol'
    },
    {
        id: 9,
        nombre: 'Nike Jr. Mercurial Superfly',
        descripcion: 'Botines de Pasto Natural Unisex',
        precio: '$180',
        imagen: 'img/Nike-Jr-MercurialSuperfly.jpg',
        imagen2: 'img/Nike-Jr-MercurialSuperfly-2.jpg',
        categoría: 'Fútbol',
        htmlid: 'futbol'
    },

];

let contenedorItems = d.querySelector('.contenedor-items');

function CargarItems(todosLosProductos, htmlid){
    CargarBanners(htmlid);
    contenedorItems.innerHTML = '';

    todosLosProductos.forEach(producto => {

        let div = d.createElement('div');
        div.className = 'producto w-75 m-2 m-sm-5';
        div.setAttribute('data-id' , producto.id);

        let img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.className = 'w-100';

        let h3 = document.createElement('h3');
        h3.textContent = producto.nombre;

        let p1 = document.createElement('p');
        p1.textContent = producto.descripcion;

        let p2 = document.createElement('p');
        p2.textContent = producto.precio;
        p2.className = 'fw-bold precio'

        let p3 = document.createElement('p');
        p3.textContent = producto.categoría;

        let button = document.createElement('button');
        button.id = 'abrir';
        button.textContent = 'COMPRAR';

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(button);

        contenedorItems.append(div);

    })
}

CargarItems(productos);

let botonComprar = d.querySelector('.comprar');
let modalComprar1 = d.getElementById('modal-comprar');
let headerModal = d.querySelector('.modal-header');
let cerrarCompra = d.querySelector('.cerrar-compra');
let botonModal1 = d.querySelector('.botonModal1');
let modalFooter1 = d.querySelector('.modal-footer')

let modaldatos = d.getElementById('modaldatos');
let headerModal2 = d.querySelector('.modal-header-datos');
let modalFooter2 = d.querySelector('.modal-footer-2');
let botonSubmit = d.querySelector('.botonModal2');
let modales = d.getElementById('modal-carro-comprar')

let modalAbierto = false;
let modal2Abierto = false;

botonComprar.addEventListener("click", (e) =>{
    

    if(!modalAbierto){
    let titulo = d.createElement('h3');
    titulo.textContent = 'Productos agregados al carrito';
    titulo.className = 'modal-title fs-3 text-start text-info-emphasis';

    let divContenido = d.createElement('div');
    divContenido.className = 'modal-body-comprar';

    let contenedorProductosModal = d.createElement('div');
    contenedorProductosModal.id = 'contenedor-productos-modal';  
    contenedorProductosModal.className = 'ms-4 mt-4'

    function actualizarProductosModal() {
        // Limpiar el contenido actual
        contenedorProductosModal.innerHTML = '';

        todosLosProductos.forEach(producto => {
            let productoModal = d.createElement('div');
            productoModal.textContent = `${producto.title} - ${producto.quantity} x ${producto.price}`;
            contenedorProductosModal.appendChild(productoModal);
            productoModal.className = 'pb-5 fs-4 fw-semibold';
        });

        // Actualizar el total
        totalProductos.textContent = `Total: $${total.toFixed(2)}`;
    }

    let totalProductos = d.createElement('p');
    totalProductos.className = 'fs-2 fw-bold text-center p-4 border-top border-dark-subtle border-3 bg-secondary-subtle ';
    totalProductos.id = "total-productos"
    divContenido.appendChild(totalProductos);    
    
    let total = 0;

    todosLosProductos.forEach(producto => {
        total += producto.quantity * parseFloat(producto.price.slice(1));
    });

    totalProductos.textContent = `Total: $${total.toFixed(2)}`;

    actualizarProductosModal();

    divContenido.appendChild(contenedorProductosModal);

    headerModal.prepend(titulo);
    headerModal.after(divContenido);
    divContenido.after(modalFooter1);
    
    modalAbierto = true;
    }

})

botonModal1.addEventListener('click', (e)=>{
        
    if(!modal2Abierto){

        let titulo = d.createElement('h3');
    titulo.textContent = 'Completar los datos';
    titulo.className = 'modal-title fs-3 text-start text-info-emphasis';

    let nombre = d.createElement('input')
    nombre.type = 'text'
    nombre.name = 'Nombre' 
    nombre.placeholder = 'Nombre';
    nombre.className = 'mb-4 fs-3 p-2 '

    let parrafo1 = d.createElement('p')

    nombre.addEventListener('blur', (e) => {
        if (e.target.value.length < 3) {
            e.target.setCustomValidity('Debe tener 3 caracteres como mínimo');
            nombre.className = 'text-danger border-bottom border-danger fs-3 p-2'
            parrafo1.textContent = 'Debe tener 3 caracteres como mínimo'
            parrafo1.className = 'fs-5 text-danger'
            nombre.after(parrafo1)
        } else {
            e.target.setCustomValidity('');
            nombre.className = 'mb-4 fs-3 p-2';
            nombre.required = true;
            parrafo1.textContent = '';
            parrafo1.className = '';
        }
    });
    
    let mail = d.createElement('input');
    mail.type = 'email';
    mail.name = 'email';
    mail.placeholder = 'Mail';
    mail.className = 'mb-4 fs-3 p-2';

    let parrafo2 = d.createElement('p')

    mail.addEventListener('blur', (e) => {
    if (!e.target.value.includes('@') || !e.target.value.includes('.com')) {
        e.target.setCustomValidity('Debe contener @ y .com');
        mail.className = 'text-danger border-bottom border-danger  fs-3 p-2';
        parrafo2.textContent = 'Debe contener @ y .com'
        parrafo2.className = 'fs-5 text-danger mb-4'
        mail.after(parrafo2)
    } else {
        e.target.setCustomValidity('');
        mail.className = 'mb-4 fs-3 p-2';
        mail.required = true;
        parrafo2.textContent = '';
        parrafo2.className = '';
    }
});

    
    let parrafo3 = d.createElement('p')

    let telefono = d.createElement('input');
    telefono.type = 'number';
    telefono.name = 'telefono';
    telefono.pattern = '[0-9]{10}';
    telefono.maxLength = '10';  
    telefono.placeholder = 'Teléfono';
    telefono.className = 'mb-4 fs-3 p-2';

    telefono.addEventListener('blur', (e) => {
        if (e.target.value.length != 10) {
            e.target.setCustomValidity('Debe contener 10 números');
            telefono.className = 'text-danger border-bottom border-danger fs-3 p-2';
            parrafo3.textContent = 'Debe contener 10 números'
            parrafo3.className = 'fs-5 text-danger mb-4'
            telefono.after(parrafo3)
        } else {
            e.target.setCustomValidity('');
            telefono.className = 'mb-4 fs-3 p-2';
            telefono.required = true;
            parrafo3.textContent = '';
            parrafo3.className = '';
        }
    });

    let fecha = d.createElement('input');
    fecha.type = 'date';
    fecha.placeholder = 'Día de entrega';
    fecha.className = 'mb-4 fs-3 p-2';

    let divDireccion = d.createElement('div');
    divDireccion.className = 'd-flex justify-content-between'

    let parrafo4 = d.createElement('p')

    let direccion = d.createElement('input');
    direccion.type = 'text';
    direccion.name = 'direccion';
    direccion.placeholder = 'Calle';
    direccion.className = 'mb-4 fs-3 p-2 col-12 direccion';

    let divCalle = d.createElement('div');
    divCalle.className = 'd-flex flex-column col-7'
    divCalle.append(direccion)

    direccion.addEventListener('blur', (e) => {
        if (e.target.value.length < 3) {
            e.target.setCustomValidity('Debe contener 3 letras minimo');
            direccion.className = 'text-danger border-bottom border-danger fs-3 p-2 col-12 direccion';
            parrafo4.textContent = 'Debe contener 3 letras minimo'
            parrafo4.className = 'fs-5 text-danger mb-4 col-5'
            divCalle.append(parrafo4)
        } else {
            e.target.setCustomValidity('');
            direccion.className = 'mb-4 fs-3 p-2 col-12 direccion';
            direccion.required = true;
            parrafo4.textContent = '';
            parrafo4.className = '';
        }
    });

    let parrafo5 = d.createElement('p')

    let numero = d.createElement('input');
    numero.type = 'number';
    numero.name = 'numero';
    numero.pattern = '[0-9]{10}';
    numero.placeholder = 'Número';
    numero.className = 'mb-4 fs-3 p-2 col-12';

    let divNumero = d.createElement('div');
    divNumero.className = 'd-flex flex-column col-4'
    divNumero.append(numero)

    numero.addEventListener('blur', (e) => {
        if (e.target.value.length < 3) {
            e.target.setCustomValidity('Debe contener 3 números minimo');
            numero.className = 'text-danger border-bottom border-danger fs-3 p-2 col-12';
            parrafo5.textContent = 'Debe contener 3 números minimo'
            parrafo5.className = 'fs-5 text-danger mb-4 col-12'
            divNumero.append(parrafo5)
        } else {
            e.target.setCustomValidity('');
            numero.className = 'mb-4 fs-3 p-2 col-12';
            numero.required = true;
            parrafo5.textContent = '';
            parrafo5.className = '';
        }
    });

    let parrafo6 = d.createElement('p');
    
    let Visa = d.createElement('input');
    Visa.type = 'radio';
    Visa.name = 'Pago';
    Visa.value = 'Visa';
    Visa.className = 'me-2';
    let VisaTexto = d.createElement('label')
    VisaTexto.textContent = 'Visa'
    VisaTexto.className = 'fs-3 mb-3 text-primary-emphasis mt-2'
    VisaTexto.prepend(Visa)

    let Master = d.createElement('input');
    Master.type = 'radio';
    Master.name = 'Pago';
    Master.value = 'Master';
    Master.className = 'me-2';
    let MasterTexto = d.createElement('label')
    MasterTexto.textContent = 'MasterCard'
    MasterTexto.className = 'fs-3 mb-3 text-primary-emphasis'
    MasterTexto.prepend(Master)

    let Efectivo = d.createElement('input');
    Efectivo.type = 'radio';
    Efectivo.name = 'Pago';
    Efectivo.value = 'Efectivo';
    Efectivo.className = 'me-2';
    let EfectivoTexto = d.createElement('label')
    EfectivoTexto.textContent = 'Efectivo'
    EfectivoTexto.className = 'fs-3 mb-3 text-primary-emphasis'
    EfectivoTexto.prepend(Efectivo)

    
    let numeroTarjeta = d.createElement('input');
    numeroTarjeta.type = 'number';
    numeroTarjeta.name = 'numero de Tarjeta';
    numeroTarjeta.placeholder = 'Número de tarjeta';
    numeroTarjeta.className = 'mb-2 fs-3 p-2 mt-2 d-none';
    

    Visa.addEventListener('click', function() {
        numeroTarjeta.className = 'mb-2 fs-3 p-2 mt-2 d-block';
        numeroTarjeta.addEventListener('blur', (e) => {
            if (e.target.value.length !== 16) {
                e.target.setCustomValidity('Debe contener 16 números');
                numeroTarjeta.className = 'text-danger border-bottom border-danger mb-2 fs-3 p-2 mt-2';
                parrafo6.textContent = 'Debe contener 16 números'
                parrafo6.className = 'fs-5 text-danger mb-4'
                numeroTarjeta.after(parrafo6)   
            } else {
                e.target.setCustomValidity('');
                numeroTarjeta.className = 'mb-2 fs-3 p-2 mt-2';
                numeroTarjeta.required = true;
                parrafo6.textContent = '';
                parrafo6.className = '';
            }
        });
            
    });

    Master.addEventListener('click', function() {
        numeroTarjeta.className = 'mb-2 fs-3 p-2 mt-2 d-block';
        numeroTarjeta.addEventListener('blur', (e) => {
            if (e.target.value.length !== 16) {
                e.target.setCustomValidity('Debe contener 16 números');
                numeroTarjeta.className = 'text-danger border-bottom border-danger mb-2 fs-3 p-2 mt-2';
                parrafo6.textContent = 'Debe contener 16 números'
                parrafo6.className = 'fs-5 text-danger mb-4'
                numeroTarjeta.after(parrafo6)
            } else {
                e.target.setCustomValidity('');
                numeroTarjeta.className = 'mb-2 fs-3 p-2 mt-2';
                numeroTarjeta.required = true;
                parrafo6.textContent = '';
                parrafo6.className = '';
            }
        });
            
    });


Efectivo.addEventListener('click', function() {
    numeroTarjeta.className = 'mb-2 fs-3 p-2 mt-2 d-none';
    parrafo6.textContent = '';
    parrafo6.className = '';
});


 
    let divContenido2 = d.createElement('form');
    divContenido2.className = 'm-4 d-flex flex-column'
    
    divContenido2.appendChild(numeroTarjeta);
    headerModal2.after(divContenido2);
    divContenido2.appendChild(nombre);
    divContenido2.appendChild(mail);
    divContenido2.appendChild(telefono);
    divContenido2.appendChild(fecha);
    divContenido2.appendChild(divDireccion);
    divContenido2.appendChild(VisaTexto);
    divContenido2.appendChild(MasterTexto);
    divContenido2.appendChild(EfectivoTexto);
    divContenido2.appendChild(numeroTarjeta);
    divDireccion.appendChild(divCalle);
    divDireccion.appendChild(divNumero);
    headerModal2.prepend(titulo);
    modalFooter2.before(divContenido2);

    let mensajeMostrado = false;

botonSubmit.addEventListener('click', function () {
    let parrafo = document.createElement('p');   

    if (nombre.value.length > 3 && mail.value.includes('@') && mail.value.includes('.com') && telefono.value.length === 10 && direccion.value.length > 3 && numero.value.length >= 3 && Efectivo.checked && fecha.value !== ''){

        localStorage.removeItem("products");
        location.reload();

    } else if (nombre.value.length > 3 && mail.value.includes('@') && mail.value.includes('.com') && telefono.value.length === 10 && direccion.value.length > 3 && numero.value.length >= 3 && fecha.value !== '' && (Visa.checked || Master.checked) &&          numeroTarjeta.value.length === 16) {

        localStorage.removeItem("products");
        location.reload();

    } else{
        if (!mensajeMostrado) {
            parrafo.textContent = 'Revise los datos ingresados';
            parrafo.className = 'fs-4 text-danger mb-4 ms-4';
            modalFooter2.after(parrafo);
            mensajeMostrado = true;
        }
    }
});   

    modal2Abierto = true
    }
    
    
});



let modal = d.getElementById("miModal");
let modalBody = d.getElementById("modalBody");
let cerrarBoton = d.getElementById('cerrar');
let tarjetasProductos = d.querySelectorAll('.producto');
let abrir = d.getElementById('abrir');


function filtrosClick(tarjetasProductos){
     tarjetasProductos.forEach(tarjeta =>{
        tarjeta.addEventListener('click', function() {
            const idProducto = this.getAttribute('data-id');
            
            const productoSeleccionado = productos.find(producto => producto.id === parseInt(idProducto));

    
            if(productoSeleccionado){
                
                // let item = d.querySelector('carousel-item');

                let img = d.createElement('img');
                img.src = productoSeleccionado.imagen;
                img.alt = productoSeleccionado.nombre;

                let divCol = d.createElement('div');
                divCol.className = "col-12 col-md-5";
                d.querySelector('.modal-body').appendChild(divCol);

                let divCol2 = d.createElement('div');
                divCol2.className = "col-12 col-md-6 mt-5 mt-md-0 contenido";
                d.querySelector('.modal-body').appendChild(divCol2);

                let h3 = d.createElement('h3');
                h3.textContent = productoSeleccionado.nombre;

                let p = d.createElement('p');
                p.textContent = productoSeleccionado.descripcion;

                let precio = d.createElement('p');
                precio.className='precio';
                precio.textContent = `${productoSeleccionado.precio}`;
                
                let categoria = d.createElement('p');
                categoria.textContent = productoSeleccionado.categoría;

                let boton = d.createElement('input');
                boton.type="button";
                boton.className="btn-add-cart";
                boton.value="Comprar";


                divCol.appendChild(img);
                divCol2.appendChild(h3);
                divCol2.appendChild(p);
                divCol2.appendChild(precio);
                divCol2.appendChild(categoria);
                divCol2.appendChild(boton);

                
               
                boton.addEventListener('click', (e)=>{

                    modalBody.innerHTML='';
                    modal.style.display = 'none';
                })



                modal.style.display = 'block';
            }
    
        });      
    })
   
    cerrarBoton.addEventListener("click", (e) =>{
        modal.style.display = "none";
        modalBody.innerHTML='';
    })

}




let botonCarro = d.querySelector('.contenedor-carro-icono');
let contenedorProductos = d.querySelector('.contenedor-carro-productos');

botonCarro.addEventListener('click', () =>{
    contenedorProductos.classList.toggle('carrito-escondido')
})

let info = d.querySelector('.carrito-producto');
let rowProducto = d.querySelector('.row-producto');


let listaProductos = d.querySelector('.modal-body');
const valorTotal = d.querySelector('.total-pagar')
const contadorProductos =  d.querySelector('#contador-productos')


const cartEmpty = d.querySelector('.carro-vacio');
const cartTotal = d.querySelector('.carrito-total');
const vaciar = d.querySelector('.vaciar');


// let todosLosProductos = JSON.parse(localStorage.getItem("todosLosProductos")) || [];
let todosLosProductos = [];

listaProductos.addEventListener('click', e =>{
    let botonComprar = listaProductos.lastElementChild;

    if(e.target.lastElementChild == botonComprar){

        console.log(e.target.parentElement)

        const producto = e.target.parentElement;
        const info = {
            quantity: 1,
            title: producto.querySelector('h3').textContent,
            price: producto.querySelector('.precio').textContent,
        };
        

        let salir = todosLosProductos.some(productos => productos.title === info.title);

        if(salir){
            const productos = todosLosProductos.map(producto =>{
                if(producto.title === info.title){
                    producto.quantity++;
                    return producto;
                } else{
                    return producto;
                }
            })
            todosLosProductos = [...productos]
        } else{
            todosLosProductos = [...todosLosProductos, info]
        }

        mostrar();
        // saveLocal();
    }
})


rowProducto.addEventListener('click', (e) =>{
    if(e.target.classList.contains('icono-cerrar')){
        const producto = e.target.parentElement;

        const title = producto.querySelector('p').textContent;

        todosLosProductos = todosLosProductos.filter(
            producto => producto.title !== title 
        )

        console.log(todosLosProductos)
        mostrar();
    }
})

rowProducto.addEventListener('click', (e) => {
    if (e.target.classList.contains('icono-menos')) {
        const producto = e.target.parentElement;
        const title = producto.querySelector('p').textContent;

        todosLosProductos = todosLosProductos.map((producto) => {
            if (producto.title === title) {
                if (producto.quantity > 1) {
                    return { ...producto, quantity: producto.quantity - 1 };
                } else {
                    return null;
                }
            }
            return producto;
        }).filter(Boolean);

        mostrar();
    }
});






// mostrar productos al carro

const mostrar = () =>{

    if(!todosLosProductos.length){
        cartEmpty.classList.remove('escondido');
		rowProducto.classList.add('escondido');
		cartTotal.classList.add('escondido');
        vaciar.classList.add('escondido')
    }else {
		cartEmpty.classList.add('escondido');
		rowProducto.classList.remove('escondido');
		cartTotal.classList.remove('escondido');
        vaciar.classList.remove('escondido');
	}

    rowProducto.innerHTML ="";

    let total =0;
    let totalDeProductos=0;
    
    
        todosLosProductos.forEach(productos =>{
        const contenedorProductos = d.createElement('div');
        
        contenedorProductos.classList.add('carrito-producto');


        let span = d.createElement('span');
        span.className='cantidad-producto-carrito';
        span.textContent = productos.quantity;
    
        let titulo = d.createElement('p');
        titulo.className='titulo-producto-carrito';
        titulo.textContent = productos.title;
    
        let span2 = d.createElement('span');
        span2.className='precio-producto-carrito';
        span2.textContent = productos.price;

        let cerrar = d.createElement('img');
        cerrar.src= "img/cerrar.png";
        cerrar.className='icono-cerrar';

        let menos = d.createElement('img');
        menos.src = "img/menos.png";
        menos.className = 'icono-menos'

        contenedorProductos.append(span)
        contenedorProductos.append(titulo)
        contenedorProductos.append(span2)
        contenedorProductos.append(menos)
        contenedorProductos.append(cerrar);
                            
        rowProducto.append(contenedorProductos);


        vaciar.addEventListener('click', ()=>{

            todosLosProductos = [];
            localStorage.removeItem("todosLosProductos")
	        mostrar()

            // localStorage.removeItem("products");

            // carga de nuevo la URL
            // location.reload();
        });


        total = total + parseInt(productos.quantity * productos.price.slice(1));
        totalDeProductos = totalDeProductos + productos.quantity;
    })

    valorTotal.innerText = `$${total}`
    contadorProductos.innerText = totalDeProductos;

};

// Local Storage

// const saveLocal = () =>{
//     localStorage.setItem("todosLosProductos", JSON.stringify(todosLosProductos));
// }


// Banners ===============

function CargarBanners(htmlid) {
    let contenedorBanners = d.querySelector('.contenedor-banners');
    contenedorBanners.innerHTML = '';
    
    const bannersFiltrados = banners.filter(banner => banner.htmlid === htmlid);
    
    bannersFiltrados.forEach(banner => {
        let imgBanner = document.createElement('img');
        imgBanner.src = banner.imagen;
        imgBanner.alt = `Banner ${htmlid}`;
        imgBanner.className = 'w-100';
        
        contenedorBanners.appendChild(imgBanner);
    });
} 

// FILTROS ===============


let filtroCategorias = d.querySelectorAll('.boton-categoria');

filtroCategorias.forEach(filtro => {
    filtro.addEventListener("click", (e) => {
        filtroCategorias.forEach(filtro => filtro.classList.remove("active"))
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id !== 'todos') {
            let productosFiltrados = productos.filter(producto => producto.htmlid === e.currentTarget.id);
            CargarItems(productosFiltrados, e.currentTarget.id);
            filtrosClick(document.querySelectorAll('.producto'));

        } else {
            CargarItems(productos, 'todos');
            filtrosClick(document.querySelectorAll('.producto'));   
        }
    });
}); 

filtrosClick(document.querySelectorAll('.producto'));