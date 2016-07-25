var esGraphQL = require('elasticsearch-graphql')
var graphql = require('graphql')
var hitsSchema = require('./schema')

var graphqlHTTP = require('express-graphql')
var express = require('express')
var cors = require('cors')

var app = express()
var mapping = {
  "properties" : {
    "H178cWirX" : {
      "type" : "string",
      "fields" : {
        "autocomplete" : {
          "type" : "string",
          "analyzer" : "autocomplete"
        },
        "raw" : {
          "type" : "string",
          "index" : "not_analyzed"
        }
      }
    },
    "Hyf8cbjr7" : {
      "type" : "string",
      "fields" : {
        "autocomplete" : {
          "type" : "string",
          "analyzer" : "autocomplete"
        },
        "raw" : {
          "type" : "string",
          "index" : "not_analyzed"
        }
      }
    },
    "system_created" : {
      "type" : "long"
    }
  }
}

var ordersSearchSchema = esGraphQL({
  graphql: graphql,
  name: 'ordersSearch',
  mapping: mapping, // enter your elasticsearch mapping here
  elastic: {
    host: 'http://localhost:9200',
    index: 't_r1ll5bihq',
    type: 'record',
    query: function(query, context) {
      debugger
      return query
    },
  },
  hitsSchema: hitsSchema
})

app.use(cors())

var graphqlMiddleware = graphqlHTTP(request => ({
  graphiql: true,
  schema: new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        ordersSearch: ordersSearchSchema
      }
    })
  }),
  context: request
}))

app.use('/graphql', graphqlMiddleware);

app.listen(8100)
