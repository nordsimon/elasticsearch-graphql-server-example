# Deprecated and no longer maintained

When I first started with grapql this was one of the big advantages I found, to generate a more user
friendly api out of already existing schema definitions. However this particular package has been stale for a while and I don't have any time to work on it. Also elastic and graphql is moving fast forward so to keep up with the apis are very hard. Hopefully i will get back to this package in the future since I think graphql is a very neat way to expose an api.

Until then, thanks for all the stars and please contact me if you have any ideas or would like to work on this tool

# Elastic Search GraphQL Server Example
An example server for [elasticsearch-graphql](https://www.npmjs.com/package/elasticsearch-graphql) package

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage
Change variables in server.js to any existing elasticsearch server with index and type.

NOTE: In order to test this, you will need access to a elastic search server with already existing data. This example will not create any mock data for you
```js
esGraphQL({
  graphql: graphql,
  name: 'yourSchemaName',
  mapping: {
    "properties": {
      "id": {
        "type" : "string",
        "index" : "not_analyzed"
      },
      ...
    }
  },
  elastic: {
    host: 'localhost:9200',
    index: 'index',
    type: 'type',
    query: function(query, context) {
      return query
    }
  },
  hitsSchema: hitsSchema
})
```
