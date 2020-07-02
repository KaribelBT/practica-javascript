let productList = [];

class Products{
    pname;
    price;
    constructor(pname, price){
        this.pname = pname;
        this. price = price;
    }
}

let pname, price, product;

function addProduct(){
        do{
            pname = prompt ('Ingresa nombre del producto');
            if (pname == 'salir'){
                break
            }
            price = prompt(parseFloat('Ingresa precio del producto'));
            product = new Products(pname, price);
            productList.push(product);
        }while(true)
}

function productsList(){
    return productList;
}

addProduct();

/* PRODUCTOS
window.listado_de_pantalones = [];

class pantalones {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function agregarPantalon(pantalon) { //ya nos dieron los datos porque son copados
    listado_de_pantalones.push(pantalon);
}
function listarPantalones() {
    console.log(listado_de_pantalones);
}
let hotPants = new pantalones ('Hot Pants!!', 8000);
let momJeans = new pantalones ('Mom Jeans', 3000);
let bombers = new pantalones ('Bombers', 5000);

agregarPantalon(hotPants);
agregarPantalon(momJeans);
agregarPantalon(bombers);

listarPantalones();*/
