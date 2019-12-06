const { gql } = require('apollo-server')

const typedefs = gql`
    enum Colour {
        blue
        orange
    }

    type Click {
        timestamp: String!
        type: Colour!
    }

    type ClickBroadcastResponse {
        success: Boolean!
        message: String
    }

    type Query {
        broadcastClick(timestamp: String!, type: Colour!): ClickBroadcastResponse!
    }

    type Subscription {
        clickBroadcast: Click
    }
`


module.exports = typedefs
