class ProductManager {
    constructor() {
        this.products = []
        this.idCounter = 1
    }
    
    getProducts = () => {
        return this.products
    }

    getProductById = (id) => {
        const product = this.products.find(elem => elem.id === id)
        if (!product) {
            console.error("Producto no se encuentra en el listado")
            return
        }
        
        return product
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Faltan datos del producto");
            return
        }
        
        if (this.products.find(elem => elem.code === code)) {
            console.error("Codigo de producto ya existe");
            return
        }
        
        const id = this.idCounter
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
        this.idCounter++
    }
}

const productManager = new ProductManager()
console.log('Metodo getProducts: ',productManager.getProducts())
productManager.addProduct('Completo', 'Italiano', 1500, 'https://m.elmostrador.cl/media/2021/05/completo.jpg', '2468', 300)
console.log('Metodo getProducts: ',productManager.getProducts())
productManager.addProduct('Churrasco', 'Luco', 3000, 'https://n9z4u8f2.rocketcdn.me/wp-content/uploads/2015/06/Barros-luco01.jpg', '2468', 100)
console.log('Metodo getProductById: ',productManager.getProductById(1))