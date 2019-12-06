const { gql } = require('apollo-server')

const typedefs = gql`
    type Book {
        title: String
        author: String
    }
    
    type Query {
        books: [Book]
    }
`


module.exports = typedefs
