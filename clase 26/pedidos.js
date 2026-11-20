let shoppingCart = [];
let userId, productId, cart = {};

function addToCart(){
    userId = prompt(parseInt('Ingrese el ID del usuario del siguiente listado de la consola: '+ JSON.stringify(userList)));
    while(productsList().length > 0){
        productId = prompt(parseInt('Ingrese el ID del producto del siguiente listado de la consola: '+ JSON.stringify(productList))); 
        if (productId == 'listo'){
            break
        }
        cart = {
            user: usersList()[userId],
            product: productsList()[productId],
        }
        shoppingCart.push(cart);
    }
} 
function buy(){
    let buyer = shoppingCart[0].user.name
    let productsToBuy = [];
    for (let i = 0; i < shoppingCart.length; i++) {
        const element = shoppingCart[i].product;
        productsToBuy.push(element);
    }
    confirm(buyer+ 'estás seguro que deseas comprar: '+ JSON.stringify(productsToBuy));
}

addToCart();
buy();
console.log(shoppingCart);
console.log(productsList());

































/*PEDIDOS

var carrito = [];
function reservar() {
    while (true) {
        console.log(window.listado_de_pantalones);
        let productoReservado = prompt('Elegí el numero de producto deseado');
        if (productoReservado == 'salir') {
            break;
        }
        carrito.push(
            window.listado_de_pantalones.splice(
                    parseInt(productoReservado),
                    1
                )
            );
        
    }
    
}

function comprar(usuario, pantalon) {
    let comprador = window.listado_de_usuarios[usuario];
    confirm(comprador.nombre + ' querés comprar estos ' + JSON.stringify(carrito) + '?');
}

// Karibel quiere bombers
reservar();

comprar(0,2);*/
