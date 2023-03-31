export default class DAOs {
    constructor () {
        this.products = []
    }

    getProducts () {
        console.log('retornado');
        return this.products
    }

    addProduct (newProduct) {
        this.products.push(newProduct)
        console.log('añadido');
        return newProduct
    }
    
    updateProduct (updatedProduct) {
        const index = this.products.findIndex(el => el.id === updatedProduct.datos.id);
        this.products.splice(index, 1, updatedProduct.datos)
        console.log('actualizado');
        return updatedProduct.datos
    }
    
    deleteProduct (id) {
        const index = this.products.findIndex(el => el.id === id);
        const deletedProduct = this.products.splice(index, 1)
        console.log('eliminado');
        return deletedProduct[0]
    }
}