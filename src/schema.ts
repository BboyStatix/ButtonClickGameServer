const { gql } = require('apollo-server')

const typedefs = gql`
    type Book {
        title: String
        author: String
    }

    enum Colour {
        blue
        orange
    }

    type Click {
        timestamp: String
        type: Colour
    }

    type ClickBroadcastResponse {
        success: Boolean!
        message: String
        click: Click
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        broadcastClick(timestamp: String, type: String): ClickBroadcastResponse!
    }

    type Subscription {
        clickBroadcast: Click
    }
`


module.exports = typedefs
