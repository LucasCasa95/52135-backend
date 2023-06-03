class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => {return this.products}

    getNextID = () => {
        const count = this.products.length
        const nextID =(count > 0) ? this.products[count - 1].id + 1 : 1
        return nextID
    }

    existProduct = (code) => { 
        return this.products.some((prod) => prod.code ===code);
    }

    getProductbyId = (id) => {
        return this.products.find((prod) => prod.id == id) ?? "Not Found";
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{
        if(!this.existProduct(code)){
            const product = {
                id: this.getNextID(),
                code: code ?? 0,
                title: title ?? "",
                description: description ?? "",
                price: price ?? 0.0,
                thumbnail: thumbnail ?? "",
                stock: stock ?? 0
            }
            this.products.push(product);
        }else{
            console.error(`Producto ${title} repetido. Codigo ${code} ya existente`);
        }
    }
}

const productsManager = new ProductManager();
console.log(productsManager.getProducts());

productsManager.addProduct("Computadora portatil", "Notebook lenovo", 85000, "https://mla-s1-p.mlstatic.com/873896-MLA48241212970_112021-F.jpg", 1, 93);

console.log("muestro los productos");
console.log(productsManager.getProducts());

productsManager.addProduct("Auriculares", "Auriculares con microfono", 5000, "https://http2.mlstatic.com/D_NQ_NP_824972-MLA44676439845_012021-O.webp", 2, 300);
productsManager.addProduct("mouse inalámbrico", "mouse inalámbrico logitech M280", 10000, "https://http2.mlstatic.com/D_NQ_NP_918568-MLA32146214305_092019-O.webp", 1, 225);
console.log("muestro los productos (actualizado)");
console.log(productsManager.getProducts());

console.log("-----------------------------------------------");
console.log("buscar productos por id");
console.log("-----------------------------------------------");

console.log(productsManager.getProductbyId(1));
console.log("-----------------------------------------------");

console.log(productsManager.getProductbyId(2));
console.log("-----------------------------------------------");

console.log(productsManager.getProductbyId(3));