var esGraphQL = require('elasticsearch-graphql')
var graphql = require('graphql')
var hitsSchema = require('./schema')

var graphqlHTTP = require('express-graphql')
var express = require('express')
var cors = require('cors')

var app = express()

var mapping = {
  mappings: {
    order: {
      properties: {
        author : {
          type : "string",
          index : "not_analyzed"
        }
      }
    }
  }
}
var ordersSearchSchema = esGraphQL({
  graphql: graphql,
  name: 'ordersSearch',
  mapping: mapping, // enter your elasticsearch mapping here
  elastic: {
    host: 'localhost:9200',
    index: 'orders',
    type: 'order'
  },
  hitsSchema: hitsSchema
})

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        ordersSearch: ordersSearchSchema
      }
    })
  }), graphiql: true
}))

app.listen(8000)
