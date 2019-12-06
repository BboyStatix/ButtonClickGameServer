const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }:{[key:string]:number}) => {
    console.log(`🚀  Server ready at ${url}`);
});
