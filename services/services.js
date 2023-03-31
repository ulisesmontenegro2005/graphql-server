import DAOs from "../DAOs/daos.js"
import ProductsModel from "../models/models.js"

const DAO = new DAOs()

function generateId () {
    const arr = []

    for (let i = 0; i < 5; i++) {
        let n = Math.floor(Math.random() * 10)
        arr.push(n)
    }

    return `${Date.now()}-${arr.join('')}`
}


export default class Services {

    getProducts () {
        return DAO.getProducts()
    }

    addProduct (newProduct) {
        let p = new ProductsModel(generateId(), newProduct.datos.name, newProduct.datos.price, newProduct.datos.thumbnail)
        return DAO.addProduct(p)
    }

    updateProduct (updatedProduct) {
        return DAO.updateProduct(updatedProduct)
    }

    deleteProduct (id) {
        return DAO.deleteProduct(id)
    }

}

