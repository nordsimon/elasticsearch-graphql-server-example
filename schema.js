var graphql = require('graphql')

module.exports = {
  resolve: function (res, params, data) {
    console.log('Will fetch', res.hits.hits.map(function (hit) { return hit._id }).join(', '), 'from anywhere')
    return new Promise(function (resolve, reject) {
      resolve(res.hits.hits)
    })
  },
  args: {
  },
  type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
    name: 'ExampleSchema',
    description: 'This is just an raw example schema',
    fields: function () {
      return {
        id: {
          type: graphql.GraphQLString,
          resolve: function (node) {
            return node._id
          }
        },
        index: {
          type: graphql.GraphQLString,
          resolve: function (node) {
            return node._index
          }
        },
        type: {
          type: graphql.GraphQLString,
          resolve: function (node) {
            return node._type
          }
        }
      }
    }
  }))
}
