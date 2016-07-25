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
