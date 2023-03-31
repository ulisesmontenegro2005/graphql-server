import Services from "../services/services.js";
import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

const schema = buildSchema(`
type Product {
    id: ID!,
    name: String,
    price: Int,
    thumbnail: String
}
input ProductInput {
    name: String,
    price: Int,
    thumbnail: String
}
input ProductInputComplete {
    id: String,
    name: String,
    price: Int,
    thumbnail: String
}
type Query {
    getProducts: [Product]
}
type Mutation {
    addProduct(datos: ProductInput): Product
    updateProduct(datos: ProductInputComplete): Product
    deleteProduct(id: ID!): Product
}
`)

export default class GraphqlController {
    constructor() {
        const api = new Services()
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                getProducts: api.getProducts,
                addProduct: api.addProduct,
                updateProduct: api.updateProduct,
                deleteProduct: api.deleteProduct
            },
            graphiql: true
        })
    }
}